function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('open');
}

document.getElementById('year').textContent = new Date().getFullYear();