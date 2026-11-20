
const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
      const hamburgerMenuGetAttribute = hamburgerMenu.getAttribute('class');
const closeButton = document.getElementById('close-button');

      const sideBar = document.getElementsByClassName('sidebar')[0];

const sideBarGetAttribute = sideBar.getAttribute('class', 'position');

hamburgerMenu.addEventListener('click', function () {

       sideBar.classList.remove('hidden');

      hamburgerMenu.classList.add('hidden');
   })

closeButton.addEventListener('click', function() {

      sideBar.classList.add('hidden');

      hamburgerMenu.classList.remove('hidden');
})