let menu = document.querySelector('.nav-menu');
let buttonMenu = document.querySelector('.menu-burger-header');

buttonMenu.addEventListener('click', function () {
  menu.classList.toggle('open-menu');
});
