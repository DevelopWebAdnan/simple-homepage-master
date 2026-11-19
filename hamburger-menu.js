// console.log('Hamburger menu.js file is added')

const navListRow = document.getElementsByClassName('nav-list-row')[0];
console.log(navListRow);

const sidebarTogglers = document.getElementsByClassName('sidebar-togglers')[0];
console.log(sidebarTogglers);
const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
console.log(hamburgerMenu);
      const hamburgerMenuGetAttribute = hamburgerMenu.getAttribute('class');
// const hamburgerMenuGetAttribute = hamburgerMenu.getAttribute('class');
      // const hamburgerMenuSetAttribute = hamburgerMenu.setAttribute('class', 'hidden');
      // const hamburgerMenuSetAttribute = hamburgerMenu.setAttribute('display', 'hidden');
const closeButton = document.getElementById('close-button');
console.log(closeButton);

      const sideBar = document.getElementsByClassName('sidebar')[0];
console.log(sideBar);
      const navListColumn = document.getElementsByClassName('nav-list-column')[0];
console.log(navListColumn);
const sideBarThemeToggle = document.getElementsByClassName('sidebar-theme-toggle')[0];
console.log(sideBarThemeToggle);

const sideBarGetAttribute = sideBar.getAttribute('class', 'position');
      const navListColumnGetAttribute = navListColumn.getAttribute('class');
      console.log(hamburgerMenuGetAttribute, sideBarGetAttribute, navListColumnGetAttribute);


// document.getElementById('hamburger-menu')
hamburgerMenu.addEventListener('click', function () {
      console.log('Clicked on the hamburger menu');

      //  navList.classList.add('flex');
       sideBar.classList.remove('hidden');

      hamburgerMenu.classList.add('hidden');
      // hamburgerMenu.classList.remove('flex');
      // hamburgerMenu.querySelector('display', 'none');

      // sideBar.setAttribute('class', 'position:static');
      // navList.setAttribute('position', 'static');
      // closeButton.classList.remove('hidden');
      // navListColumn.classList.remove('hidden');
      // sideBarThemeToggle.classList.remove('hidden');
   })

closeButton.addEventListener('click', function() {
   console.log('Clicked on the close button');

      sideBar.classList.add('hidden');

      hamburgerMenu.classList.remove('hidden');
})