// Toggle menu untuk mobile
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Animasi ikon hamburger jadi X
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
});
