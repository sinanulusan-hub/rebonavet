/* RebonaVet — site behaviour: language (TR/EN), catalogue, menu, WhatsApp form */
(function () {
  'use strict';

  var WA_NUMBER = '905327196090';

  // ---------- English strings (Turkish lives in the HTML) ----------
  var EN = {
    skip: 'Skip to content',
    nav_products: 'Products', nav_science: 'Science', nav_ind: 'Indications', nav_cat: 'Catalogue', nav_quality: 'Quality', nav_contact: 'Contact',
    hero_eyebrow: 'Veterinary Orthopaedics · β-TCP Bone Graft',
    hero_h1: 'Synthetic bone graft for <em>veterinary surgery</em>',
    hero_lead: 'RebonaVet offers a β-tricalcium phosphate (β-TCP) based, silicate-added bone graft in four forms: Putty, Granule, Stick and Flexible. It fills non-load-bearing bone defects, acts as a scaffold for new bone formation and is gradually replaced by the patient’s own bone.',
    hero_cta1: 'Explore products', hero_cta2: 'Request samples & info',
    fact1: 'Gamma sterile · SAL 10⁻⁶', fact2: 'Radiopaque', fact3: 'No human or animal tissue', fact4: 'Made in Türkiye',
    tag1: '+ 1% silicate (SiO₂) added', tag2b: '4 forms', tag2: '15 product references',
    b1t: '100% synthetic', b1d: 'Contains no tissue of human or animal origin; no risk of disease transmission.',
    b2t: 'Osteoconductive', b2d: 'Micro- and macroporous structure resembling natural bone architecture.',
    b3t: 'Fully resorbable', b3d: 'Gradually replaced by healthy bone; no permanent implant remains.',
    b4t: 'Sterile, single use', b4d: 'Double sterile barrier packaging, ready to use.',
    p_kicker: 'Product Family', p_title: 'Four forms, <em>one material science</em>',
    p_desc: 'Every RebonaVet product is built on the same β-TCP + silicate base. Choose the form according to defect shape, access and the surgeon’s preferred technique.',
    p1_name: 'Putty', p1_f: 'β-TCP + HPMC hydrogel · Injectable',
    p1_d: 'Ready-to-use, mouldable paste supplied in a syringe. No mixing required; applied directly into irregular or hard-to-reach voids.',
    p1_1: 'Ready-to-use syringe, no preparation', p1_2: 'Mouldable for full contact with defect walls', p1_3: 'Radiopaque with ZrO₂', p1_4: 'Shelf life 3 years',
    p2_name: 'Granule', p2_f: 'β-TCP · Silicate added · Micro/macroporous',
    p2_d: 'Porous granules that closely resemble the architecture of natural bone. Shaped to the defect; can be mixed with bone marrow aspirate or other grafts.',
    p2_1: 'Interconnected micro- and macropores', p2_2: 'Combinable with bone marrow aspirate and autograft', p2_3: 'Radiopaque for radiographic follow-up', p2_4: 'Shelf life 5 years',
    p3_name: 'Stick &amp; Block', p3_f: 'β-TCP · Silicate added · Pre-formed',
    p3_d: 'Square-section sticks and block forms. They keep their shape for measured, controlled placement into the void and resorb gradually over time.',
    p3_1: 'Pre-formed in standard sizes', p3_2: 'Keeps its form, controlled resorption', p3_3: 'Radiopaque', p3_4: 'For non-load-bearing defects',
    p3_s1: '4×4×20 mm · 4 pcs', p3_s2: '5×5×20 mm · 4 pcs', p3_s3: 'Block 10×25×30 mm',
    p4_name: 'Flexible', p4_f: 'β-TCP + PLCL polymer · Silicate added',
    p4_d: 'Flexible composite of β-TCP granules and resorbable poly(lactide-co-ε-caprolactone) polymer. Conforms to the implant site for site-specific placement.',
    p4_1: 'Flexible; conforms to anatomy', p4_2: 'Can be used with bone marrow aspirate', p4_3: 'Polymer degrades to CO₂ and H₂O', p4_4: 'Shelf life 3 years',
    sizes: 'Options',
    s_kicker: 'The Science', s_title: 'How β-TCP <em>becomes bone</em>',
    s_desc: 'β-tricalcium phosphate is one of the phosphate ceramics that most closely simulates the mineral structure of bone. It dissolves gradually in the body and is replaced by new bone as it resorbs.',
    sc1t: 'Osteoconductive scaffold', sc1d: 'Interconnected micro- and macropores form a temporary scaffold that cells and blood vessels can grow into.',
    sc2t: 'Calcium and phosphate ions', sc2d: 'As the graft dissolves it releases calcium and phosphate ions that support new bone formation. Every form contains 1% silicon dioxide (silicate).',
    sc3t: 'Complete bioresorption', sc3d: 'Over time the porous structure is fully infiltrated and replaced by healthy, viable bone. No permanent foreign material is left at the healed site.',
    tl_title: 'What happens after implantation', tl_src: 'Timings are taken from the product instructions for use (IFU).',
    t1w: 'Implantation', t1h: 'Filling the defect', t1p: 'The graft is placed in the defect in contact with all of its surfaces.',
    t2w: 'First weeks', t2h: 'Cellular infiltration', t2p: 'Cells and vessels grow into the pores; new bone starts to form on the scaffold.',
    t3w: '16–24 weeks', t3h: 'Structure maintained', t3p: 'The graft keeps its architecture while gradually dissolving and integrating with new bone.',
    t4w: '6–12 months', t4h: 'Complete bioresorption', t4p: 'The graft is fully resorbed and replaced by the patient’s own bone.',
    r1b: 'Granule · Putty', r1: 'Structure maintained for 16–24 weeks; complete resorption in 6–12 months.',
    r2b: 'Flexible', r2: 'Activity largely complete in 4–6 months; full resorption may take up to 18 months.',
    r3b: 'Composition', r3: 'β-TCP · 1% SiO₂ · 0.1% ZrO₂ (Granule, Putty) · HPMC (Putty) · PLCL (Flexible)',
    i_kicker: 'Indications', i_title: 'Broad use in <em>small animal orthopaedics</em>',
    i_desc: 'For filling non-load-bearing bone defects caused by trauma, surgery or pathology, and supporting bone regeneration.',
    in1t: 'Fracture repair', in1d: 'Defect filling in traumatic and comminuted fractures',
    in2t: 'Non-union', in2d: 'Non-union, delayed union and malunion',
    in3t: 'Osteotomies', in3d: 'Open wedge and corrective osteotomies',
    in4t: 'Arthrodesis', in4d: 'Extending graft volume in joint fusion',
    in5t: 'Revision surgery', in5d: 'Bone loss after revision',
    in6t: 'Cysts and tumour voids', in6d: 'Bone cysts and post-resection cavities',
    in7t: 'Spinal fusion', in7d: 'Cage filling and fusion procedures',
    in8t: 'Maxillofacial', in8d: 'Mandible and maxilla augmentation (Flexible)',
    notice: 'RebonaVet products are intended for <strong>non-load-bearing</strong> bone defects; they must not be used to provide structural support to the skeleton or to gain screw fixation. Avoid direct application to open growth plates. Read the instructions for use before using the product.',
    c_kicker: 'Product Catalogue', c_title: 'Reference codes and <em>sizes</em>',
    c_desc: 'Quote the reference code when ordering or requesting a quotation. Contact us on WhatsApp for prices and availability.',
    f_all: 'All', f_gran: 'Granule', f_stick: 'Stick &amp; Block',
    th_prod: 'Product', th_size: 'Size / Volume', th_pack: 'Presentation',
    c_note: 'All products are sterile and single use. For veterinary use only.',
    q_kicker: 'Quality & Safety', q_title: 'Ready for the <em>operating room</em>',
    q_desc: 'Every product is gamma sterilised with a validated process, supplied in double sterile barrier packaging and traceable by lot number.',
    q1b: 'Gamma sterilised', q1s: 'Validated process, SAL 10⁻⁶',
    q2b: 'Double sterile barrier', q2s: 'Sterility guaranteed while unopened',
    q3b: 'Single use', q3s: 'Do not re-sterilise or reuse',
    q4b: '100% synthetic', q4s: 'No tissue of human or animal origin',
    q5b: 'Radiopaque', q5s: 'Allows radiographic follow-up',
    q6b: 'Made in Türkiye', q6s: 'Traceable by lot and expiry date',
    spec_t: 'Technical summary',
    sp1: 'Main component', sp1v: 'β-tricalcium phosphate',
    sp2: 'Additive', sp2v: '1% silicon dioxide (SiO₂)',
    sp3: 'Sterilisation', sp3v: 'Gamma, SAL 10⁻⁶',
    sp4: 'Storage', sp4v: '+17 °C – +27 °C, 40–60% RH',
    sp5: 'Shelf life', sp5v: 'Granule 5 years · Putty, Flexible 3 years',
    sp6: 'Use', sp6v: 'Veterinary use only',
    ct_kicker: 'Contact', ct_title: 'Product information and <em>samples</em>',
    ct_desc: 'For veterinarians, clinics and distributors: write to us about choosing a form and size, samples, orders and partnerships.',
    cp1: 'Technical advice on the right form and size for your case', cp2: 'Sample and order requests', cp3: 'Instructions for use (IFU) and product documents', cp4: 'Distribution in Türkiye and abroad',
    wa_card: 'Message us on WhatsApp',
    fm_title: 'Send a message', fm_sub: 'Fill in the form and your message opens ready-to-send in WhatsApp.',
    fm_name: 'Full name', fm_org: 'Clinic / Organisation', fm_city: 'City / Country', fm_topic: 'Topic',
    fo1: 'Product information', fo2: 'Sample request', fo3: 'Order / Price', fo4: 'Instructions for use (IFU)', fo5: 'Distribution',
    fm_msg: 'Your message', fm_msg_ph: 'Briefly describe the case, product or size…',
    fm_send: 'Send via WhatsApp', fm_note: 'Nothing is stored on this site; your message goes straight to WhatsApp.',
    ft_desc: 'β-TCP based, silicate-added synthetic bone graft system for veterinary orthopaedics.',
    ft_vet: 'For veterinary use only', ft_menu: 'Menu', ft_country: 'Türkiye', ft_rights: 'All rights reserved.',
    ft_ifu: 'Read the instructions for use before using the products.'
  };

  var META = {
    tr: {
      title: 'RebonaVet — Veteriner Sentetik Kemik Grefti | β-TCP Putty, Granül, Stick, Flexible',
      desc: 'RebonaVet; veteriner ortopedi için β-TCP bazlı, silikat katkılı sentetik kemik grefti: enjekte edilebilir Putty, Granül, Stick ve Flexible formlar. Gama steril, radyoopak, tamamen rezorbe olur.'
    },
    en: {
      title: 'RebonaVet — Synthetic Bone Graft for Veterinary Surgery | β-TCP Putty, Granule, Stick, Flexible',
      desc: 'RebonaVet: β-TCP based, silicate-added synthetic bone graft for veterinary orthopaedics — injectable Putty, Granule, Stick and Flexible forms. Gamma sterile, radiopaque and fully resorbable.'
    }
  };

  // ---------- Catalogue ----------
  var CAT = [
    { ref: 'RP005', g: 'putty', tr: 'Putty', en: 'Putty', size: '0,5 cc|0.5 cc', pack: 'Şırınga|Syringe' },
    { ref: 'RP01', g: 'putty', tr: 'Putty', en: 'Putty', size: '1 cc|1 cc', pack: 'Şırınga|Syringe' },
    { ref: 'RP03', g: 'putty', tr: 'Putty', en: 'Putty', size: '3 cc|3 cc', pack: 'Şırınga|Syringe' },
    { ref: 'RCSGB05001040', g: 'granule', tr: 'Granül', en: 'Granule', size: '0,5–1 mm · 4 cc|0.5–1 mm · 4 cc', pack: 'Cam şişe|Glass bottle' },
    { ref: 'RCSGB020405', g: 'granule', tr: 'Granül', en: 'Granule', size: '2–4 mm · 5 cc|2–4 mm · 5 cc', pack: 'Cam şişe|Glass bottle' },
    { ref: 'RCS020410', g: 'granule', tr: 'Granül', en: 'Granule', size: '2–4 mm · 10 cc|2–4 mm · 10 cc', pack: 'Steril ambalaj|Sterile pack' },
    { ref: 'RCS44204', g: 'stick', tr: 'Stick', en: 'Stick', size: '4×4×20 mm · 4 adet|4×4×20 mm · 4 pcs', pack: 'Steril ambalaj|Sterile pack' },
    { ref: 'RCS55204', g: 'stick', tr: 'Stick', en: 'Stick', size: '5×5×20 mm · 4 adet|5×5×20 mm · 4 pcs', pack: 'Steril ambalaj|Sterile pack' },
    { ref: 'RW102530', g: 'stick', tr: 'Blok', en: 'Block', size: '10×25×30 mm|10×25×30 mm', pack: 'Steril ambalaj|Sterile pack' },
    { ref: 'RFS25252', g: 'flex', tr: 'Flexible', en: 'Flexible', size: '25×25×2 mm|25×25×2 mm', pack: 'Steril ambalaj|Sterile pack' },
    { ref: 'RFS25504', g: 'flex', tr: 'Flexible', en: 'Flexible', size: '25×50×4 mm · 5 cc|25×50×4 mm · 5 cc', pack: 'Steril ambalaj|Sterile pack' },
    { ref: 'RFSC1305', g: 'flex', tr: 'Flexible', en: 'Flexible', size: '13×5 mm|13×5 mm', pack: 'Steril ambalaj|Sterile pack' },
    { ref: 'RFSC1310', g: 'flex', tr: 'Flexible', en: 'Flexible', size: '13×10 mm|13×10 mm', pack: 'Steril ambalaj|Sterile pack' },
    { ref: 'RFSC1330', g: 'flex', tr: 'Flexible', en: 'Flexible', size: '13×30 mm|13×30 mm', pack: 'Steril ambalaj|Sterile pack' },
    { ref: 'RFSC1350', g: 'flex', tr: 'Flexible', en: 'Flexible', size: '13×50 mm|13×50 mm', pack: 'Steril ambalaj|Sterile pack' }
  ];

  var lang = 'tr';
  var filter = 'all';
  var trCache = {};

  function pick(pair) { var p = pair.split('|'); return lang === 'en' ? p[1] : p[0]; }

  function renderCatalogue() {
    var body = document.getElementById('cat-body');
    if (!body) return;
    var rows = CAT.filter(function (r) { return filter === 'all' || r.g === filter; });
    body.innerHTML = rows.map(function (r) {
      return '<tr><td class="ref">' + r.ref + '</td><td><span class="pill">' + (lang === 'en' ? r.en : r.tr) +
        '</span></td><td>' + pick(r.size) + '</td><td>' + pick(r.pack) + '</td></tr>';
    }).join('');
  }

  function applyLang(next) {
    lang = next === 'en' ? 'en' : 'tr';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!(key in trCache)) trCache[key] = el.innerHTML;
      var val = lang === 'en' ? EN[key] : trCache[key];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      var cacheKey = 'ph:' + key;
      if (!(cacheKey in trCache)) trCache[cacheKey] = el.getAttribute('placeholder');
      el.setAttribute('placeholder', lang === 'en' ? EN[key] : trCache[cacheKey]);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    document.title = META[lang].title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', META[lang].desc);
    renderCatalogue();
    try { localStorage.setItem('rv-lang', lang); } catch (e) {}
  }

  function initialLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'tr') return q;
    try { var s = localStorage.getItem('rv-lang'); if (s) return s; } catch (e) {}
    var nav = (navigator.language || 'tr').toLowerCase();
    return nav.indexOf('tr') === 0 ? 'tr' : 'en';
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', function () {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    applyLang(initialLang());

    document.querySelectorAll('.lang button').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
    });

    document.querySelectorAll('.cat-tools button').forEach(function (b) {
      b.addEventListener('click', function () {
        filter = b.getAttribute('data-filter');
        document.querySelectorAll('.cat-tools button').forEach(function (x) {
          x.setAttribute('aria-pressed', String(x === b));
        });
        renderCatalogue();
      });
    });

    // Mobile menu
    var menuBtn = document.querySelector('.menu-btn');
    var links = document.getElementById('nav-links');
    if (menuBtn && links) {
      menuBtn.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(open));
      });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          links.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Header shadow on scroll
    var header = document.querySelector('.site-header');
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // WhatsApp links get a greeting in the current language
    document.querySelectorAll('.wa-link').forEach(function (a) {
      a.addEventListener('click', function () {
        var hello = lang === 'en'
          ? 'Hello, I would like information about RebonaVet bone grafts.'
          : 'Merhaba, RebonaVet kemik greftleri hakkında bilgi almak istiyorum.';
        a.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(hello);
      });
    });

    // Contact form -> WhatsApp
    var form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var F = form.elements;
        var name = F['name'].value.trim();
        var nameField = F['name'].closest('.field');
        if (!name) { nameField.classList.add('invalid'); F['name'].focus(); return; }
        nameField.classList.remove('invalid');
        var L = lang === 'en'
          ? { h: 'RebonaVet website enquiry', n: 'Name', o: 'Clinic', c: 'City / Country', t: 'Topic', m: 'Message' }
          : { h: 'RebonaVet web sitesi talebi', n: 'Ad Soyad', o: 'Klinik', c: 'Şehir / Ülke', t: 'Konu', m: 'Mesaj' };
        var lines = ['*' + L.h + '*', L.n + ': ' + name];
        if (F['org'].value.trim()) lines.push(L.o + ': ' + F['org'].value.trim());
        if (F['city'].value.trim()) lines.push(L.c + ': ' + F['city'].value.trim());
        lines.push(L.t + ': ' + F['topic'].options[F['topic'].selectedIndex].text);
        if (F['msg'].value.trim()) lines.push('', L.m + ': ' + F['msg'].value.trim());
        window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
      });
    }

    // Reveal on scroll
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    }
  });
})();
