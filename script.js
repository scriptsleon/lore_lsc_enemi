// Smooth scroll for in-page links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id.length > 1) {
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('show');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }
});

// Mobile nav
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Intersection-based reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal-up, .reveal-fade').forEach(el => io.observe(el));

// Year
document.getElementById('year').textContent = new Date().getFullYear();
