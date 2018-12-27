const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
// const menuItems = document.querySelector('.menu-items');
const navItem = document.querySelectorAll('.nav-item');

// set initial menu state //
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    // menuBtn.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    // menuBtn.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}
