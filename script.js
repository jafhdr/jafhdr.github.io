(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  if (menuButton && menu) {
    const closeMenu = () => { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Buka menu navigasi'); };
    menuButton.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); menuButton.focus(); } });
    window.addEventListener('resize', () => { if (window.innerWidth > 740) closeMenu(); });
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); instance.unobserve(entry.target); } });
    }, {threshold: 0.08});
    revealItems.forEach(item => observer.observe(item));
  } else { revealItems.forEach(item => item.classList.add('visible')); }

  if ('IntersectionObserver' in window) {
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionIds = ['beranda', 'tentangsaya', 'keahlian', 'proyeksaya', 'kontak'];
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
      });
    }, {rootMargin: '-20% 0px -65% 0px'});
    sectionIds.forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el); });
  }

  const predictionForm = document.getElementById('prediction-form');
  const result = document.getElementById('hasil-prediksi');
  const message = document.getElementById('sim-message');
  function hitungPrediksi() {
    const ids = ['thn1', 'thn2', 'thn3'];
    const values = ids.map(id => Number(document.getElementById(id)?.value));
    const valid = ids.every((id, index) => {
      const input = document.getElementById(id);
      return input && input.value.trim() !== '' && Number.isSafeInteger(values[index]) && values[index] >= 0;
    });
    if (!valid) {
      message.textContent = 'Masukkan angka bulat yang tidak negatif untuk ketiga tahun.';
      result.textContent = '—';
      return;
    }
    const [t1, t2, t3] = values;
    const forecast = Math.max(0, Math.round(t3 + ((t2 - t1) + (t3 - t2)) / 2));
    if (!Number.isSafeInteger(forecast)) {
      result.textContent = '—';
      message.textContent = 'Angka terlalu besar. Coba nilai yang lebih kecil.';
      return;
    }
    result.textContent = forecast.toLocaleString('id-ID');
    message.textContent = 'Berdasarkan rata-rata perubahan tahunan dari tiga data input.';
  }
  predictionForm?.addEventListener('submit', event => { event.preventDefault(); hitungPrediksi(); });
  // Keep the existing public handler callable for visitors using older bookmarks/snippets.
  window.hitungPrediksi = hitungPrediksi;
  const year = document.getElementById('footer-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();