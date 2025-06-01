document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('chatToggle').addEventListener('click', () => {
  const chat = document.getElementById('chatBox');
  chat.style.display = (chat.style.display === 'block') ? 'none' : 'block';
});

window.addEventListener('scroll', () => {
  document.getElementById('backToTop').style.display = window.scrollY > 300 ? 'block' : 'none';
});

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hamburger toggle
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('show');
}
