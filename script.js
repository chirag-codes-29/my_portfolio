// navbar scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// mobile nav
const toggle = document.getElementById('navToggle');
const mobile = document.getElementById('navMobile');
const closeBtn = document.getElementById('navClose');
toggle.addEventListener('click', () => mobile.classList.add('open'));
closeBtn.addEventListener('click', () => mobile.classList.remove('open'));
mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));

// scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// subtle parallax on aurora blobs following mouse
const blobs = document.querySelectorAll('.aurora-blob');
let mx = 0, my = 0;
window.addEventListener('mousemove', (e) => {
  mx = (e.clientX / window.innerWidth - 0.5);
  my = (e.clientY / window.innerHeight - 0.5);
});
function parallaxLoop(){
  blobs.forEach((b, i) => {
    const depth = (i + 1) * 6;
    b.style.transform = `translate(${mx * depth}px, ${my * depth}px)`;
  });
  requestAnimationFrame(parallaxLoop);
}
parallaxLoop();
