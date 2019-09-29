function toggleMenu() {
  const mainMenu = document.getElementById('main-menu');
  if(mainMenu.classList.contains('open')) {
    mainMenu.classList.remove('open');
    mainMenu.classList.add('closed');
    document.getElementById('mobile-ham').innerHTML = '&#8801;';
  } else {
    mainMenu.classList.remove('closed');
    mainMenu.classList.add('open');
    document.getElementById('mobile-ham').innerHTML = '&times;';
  }

}
