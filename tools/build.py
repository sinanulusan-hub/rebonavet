#!/usr/bin/env python3
"""Build script for www.rebona.vet

index.html (Turkish) is the master page. This script:
  1. writes the catalogue rows and JSON-LD into index.html (Turkish),
  2. generates en/index.html from it using tools/en.json,
so both languages are plain static HTML that search engines and AI crawlers
can read without running JavaScript.

Run from the site root:  python3 tools/build.py
"""
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
T = ROOT / "tools"
SITE = "https://www.rebona.vet"

EN = json.loads((T / "en.json").read_text(encoding="utf-8"))
META = json.loads((T / "meta.json").read_text(encoding="utf-8"))
CAT = json.loads((T / "catalog.json").read_text(encoding="utf-8"))
FAQ = {
    "tr": json.loads((T / "faq_tr.json").read_text(encoding="utf-8")),
    "en": json.loads((T / "faq_en.json").read_text(encoding="utf-8")),
}

I18N_RE = re.compile(r'<(\w+)([^>]*?\sdata-i18n="([^"]+)"[^>]*)>(.*?)</\1>', re.S)
TAG_RE = re.compile(r"<[^>]+>")


def text(s):
    return html.unescape(TAG_RE.sub("", s)).strip()


def pick(pair, lang):
    a, b = pair.split("|")
    return b if lang == "en" else a


def catalogue_rows(lang):
    rows = []
    for r in CAT:
        name = r["en"] if lang == "en" else r["tr"]
        rows.append(
            f'<tr data-g="{r["g"]}"><td class="ref">{r["ref"]}</td>'
            f'<td><span class="pill">{name}</span></td>'
            f'<td>{pick(r["size"], lang)}</td><td>{pick(r["pack"], lang)}</td></tr>'
        )
    return "\n          ".join(rows)


def tr_strings(page):
    return {m.group(3): m.group(4) for m in I18N_RE.finditer(page)}


def jsonld(lang, strings):
    """strings: key -> inner HTML for this language."""
    url = SITE + ("/en/" if lang == "en" else "/")
    s = lambda k: text(strings[k])
    org = {
        "@type": "Organization",
        "@id": SITE + "/#org",
        "name": "RebonaVet",
        "url": SITE + "/",
        "logo": {"@type": "ImageObject", "url": SITE + "/assets/img/logo-600.png", "width": 600, "height": 185},
        "image": SITE + "/assets/img/og-image.png",
        "description": s("ft_desc"),
        "slogan": text(strings["hero_h1"]),
        "knowsAbout": [
            "synthetic bone graft", "veterinary bone graft", "beta-tricalcium phosphate (β-TCP)",
            "bone void filler", "veterinary orthopaedics", "small animal orthopaedics",
            "sentetik kemik grefti", "veteriner kemik grefti",
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-532-719-60-90",
            "contactType": "sales",
            "url": "https://wa.me/905327196090",
            "availableLanguage": ["Turkish", "English"],
            "areaServed": "Worldwide",
        },
        "areaServed": "Worldwide",
    }
    website = {
        "@type": "WebSite",
        "@id": SITE + "/#website",
        "url": SITE + "/",
        "name": "RebonaVet",
        "inLanguage": ["tr", "en"],
        "publisher": {"@id": SITE + "/#org"},
    }
    webpage = {
        "@type": "WebPage",
        "@id": url + "#webpage",
        "url": url,
        "name": META[lang]["title"],
        "description": META[lang]["desc"],
        "inLanguage": lang,
        "isPartOf": {"@id": SITE + "/#website"},
        "about": {"@id": SITE + "/#org"},
        "primaryImageOfPage": SITE + "/assets/img/og-image.png",
        "dateModified": "2026-11-26",
    }
    forms = [
        ("putty", "p1", "Putty"),
        ("granule", "p2", "Granule" if lang == "en" else "Granül"),
        ("stick", "p3", "Stick & Block" if lang == "en" else "Stick & Blok"),
        ("flex", "p4", "Flexible"),
    ]
    # Products are described as plain schema.org "Thing" entries in WebPage.mentions,
    # not as Product/ProductGroup: Google's product snippets require a price
    # (offers), reviews or a rating, and the site shows none of these (prices are
    # given on request). This keeps the product facts machine-readable for search
    # and AI assistants without triggering Product rich-result errors.
    sizes_label = "Sizes" if lang == "en" else "Ölçüler"
    webpage["mentions"] = [
        {
            "@type": "Thing",
            "@id": f"{url}#product-{g}",
            "name": f"RebonaVet {label}",
            "alternateName": s(k + "_f"),
            "description": s(k + "_d") + f" {sizes_label}: " + ", ".join(
                pick(r["size"], lang) for r in CAT if r["g"] == g) + ".",
            "url": url + "#urunler",
            "identifier": [
                {"@type": "PropertyValue", "propertyID": "REF", "value": r["ref"],
                 "description": pick(r["size"], lang)}
                for r in CAT if r["g"] == g
            ],
        }
        for g, k, label in forms
    ]
    faq = {
        "@type": "FAQPage",
        "@id": url + "#faq",
        "inLanguage": lang,
        "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in FAQ[lang]
        ],
    }
    data = {"@context": "https://schema.org", "@graph": [org, website, webpage, faq]}
    return json.dumps(data, ensure_ascii=False, indent=1)


def fill_common(page, lang, strings):
    page = re.sub(r"<!--cat:start-->.*?<!--cat:end-->",
                  "<!--cat:start-->\n          " + catalogue_rows(lang) + "\n          <!--cat:end-->",
                  page, count=1, flags=re.S)
    page = re.sub(r'<script type="application/ld\+json" id="ld">.*?</script>',
                  '<script type="application/ld+json" id="ld">\n' + jsonld(lang, strings) + "\n</script>",
                  page, count=1, flags=re.S)
    return page


def main():
    src = (ROOT / "index.html").read_text(encoding="utf-8")
    tr = tr_strings(src)

    missing = sorted(k for k in tr if k not in EN)
    if missing:
        sys.exit("Missing English strings: " + ", ".join(missing))

    # ---- Turkish page ----
    (ROOT / "index.html").write_text(fill_common(src, "tr", tr), encoding="utf-8")

    # ---- English page ----
    en_page = I18N_RE.sub(lambda m: f"<{m.group(1)}{m.group(2)}>{EN[m.group(3)]}</{m.group(1)}>", src)

    def ph(m):
        return re.sub(r'placeholder="[^"]*"', f'placeholder="{html.escape(EN[m.group(1)])}"', m.group(0))
    en_page = re.sub(r'<[^>]*data-i18n-ph="([^"]+)"[^>]*>', ph, en_page)

    swaps = [
        ('<html lang="tr">', '<html lang="en">'),
        ('<link rel="canonical" href="https://www.rebona.vet/">', '<link rel="canonical" href="https://www.rebona.vet/en/">'),
        ('<meta property="og:url" content="https://www.rebona.vet/">', '<meta property="og:url" content="https://www.rebona.vet/en/">'),
        ('<meta property="og:locale" content="tr_TR">\n<meta property="og:locale:alternate" content="en_GB">',
         '<meta property="og:locale" content="en_GB">\n<meta property="og:locale:alternate" content="tr_TR">'),
        ('<a href="/" hreflang="tr" lang="tr" aria-current="page">TR</a>', '<a href="/" hreflang="tr" lang="tr">TR</a>'),
        ('<a href="/en/" hreflang="en" lang="en">EN</a>', '<a href="/en/" hreflang="en" lang="en" aria-current="page">EN</a>'),
        ('aria-label="Ana menü"', 'aria-label="Main menu"'),
        ('aria-label="Menü"', 'aria-label="Menu"'),
        ('aria-label="Filtre"', 'aria-label="Filter"'),
    ]
    for a, b in swaps:
        if a not in en_page:
            sys.exit("Swap target not found: " + a[:60])
        en_page = en_page.replace(a, b)
    en_page = re.sub(r"<title>.*?</title>", f"<title>{html.escape(META['en']['title'])}</title>", en_page, count=1)
    en_page = re.sub(r'<meta name="description" content="[^"]*">',
                     f'<meta name="description" content="{html.escape(META["en"]["desc"])}">', en_page, count=1)
    en_page = re.sub(r'<meta property="og:title" content="[^"]*">',
                     f'<meta property="og:title" content="{html.escape(META["en"]["og"])}">', en_page, count=1)
    en_page = re.sub(r'<meta property="og:description" content="[^"]*">',
                     f'<meta property="og:description" content="{html.escape(META["en"]["desc"])}">', en_page, count=1)
    en_page = fill_common(en_page, "en", EN)

    (ROOT / "en").mkdir(exist_ok=True)
    (ROOT / "en" / "index.html").write_text(en_page, encoding="utf-8")
    print(f"built: index.html (tr), en/index.html  — {len(tr)} strings, {len(CAT)} catalogue rows")


if __name__ == "__main__":
    main()
