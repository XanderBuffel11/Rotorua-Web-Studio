document.documentElement.classList.add('js');

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Portfolio gallery
const thumbs = document.querySelectorAll('.thumb');
const screens = document.querySelectorAll('.screen');
function show(name) {
  thumbs.forEach(t => {
    const on = t.dataset.target === name;
    t.classList.toggle('active', on);
    t.setAttribute('aria-selected', on);
  });
  screens.forEach(s => s.classList.toggle('active', s.dataset.screen === name));
}
thumbs.forEach(t => t.addEventListener('click', () => show(t.dataset.target)));

// Scroll reveal
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));
} else {
  items.forEach(i => i.classList.add('in'));
}

document.getElementById('year').textContent = new Date().getFullYear();
