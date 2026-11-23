/* RebonaVet — site behaviour: catalogue filter, menu, WhatsApp links and form.
   Page text is static HTML in two languages (/ and /en/); see tools/build.py. */
(function () {
  'use strict';

  var WA_NUMBER = '905327196090';
  var lang = (document.documentElement.lang || 'tr').slice(0, 2);

  // Old links used ?lang=en on the Turkish page
  var q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' && lang === 'tr') { location.replace('/en/' + location.hash); return; }
  if (q === 'tr' && lang === 'en') { location.replace('/' + location.hash); return; }

  document.addEventListener('DOMContentLoaded', function () {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // Catalogue filter
    var rows = document.querySelectorAll('#cat-body tr');
    document.querySelectorAll('.cat-tools button').forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.getAttribute('data-filter');
        document.querySelectorAll('.cat-tools button').forEach(function (x) {
          x.setAttribute('aria-pressed', String(x === b));
        });
        rows.forEach(function (r) { r.hidden = !(f === 'all' || r.getAttribute('data-g') === f); });
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

    // WhatsApp links get a greeting in the page language
    var hello = lang === 'en'
      ? 'Hello, I would like information about RebonaVet bone grafts.'
      : 'Merhaba, RebonaVet kemik greftleri hakkında bilgi almak istiyorum.';
    document.querySelectorAll('.wa-link').forEach(function (a) {
      a.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(hello);
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
