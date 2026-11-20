
// for theme-toggle at large devices
const moonFillLightBtn = document.getElementById('btn-moon-fill-light');
const sidebarMoonFillLightBtn = document.getElementById('sidebar-btn-moon-fill-light');

const moonFillBtn = document.getElementById('btn-moon-fill');
const sunFillBtn = document.getElementById('btn-sun-fill');
const sidebarMoonFillBtn = document.getElementById('sidebar-btn-moon-fill');
const sidebarSunFillBtn = document.getElementById('sidebar-btn-sun-fill');

const navItems = document.getElementsByClassName('nav-item');
const navItem1 = document.getElementsByClassName('nav-item')[0];

const moonFillBtnImg = moonFillBtn.querySelector('#btn-moon-fill img');
const sidebarMoonFillBtnImg = sidebarMoonFillBtn.querySelector('#sidebar-btn-moon-fill img');
const sunFillBtnImg = sunFillBtn.querySelector('#btn-sun-fill img');
const sunFillLightBtnImg = sunFillBtn.querySelector('#btn-sun-fill span');
const sidebarSunFillBtnImg = sidebarSunFillBtn.querySelector('#sidebar-btn-sun-fill img');
const sidebarSunFillLightBtnImg = sidebarSunFillBtn.querySelector('#sidebar-btn-sun-fill span');

const liveDemo = document.getElementsByClassName('live-demo')[0]

moonFillLightBtn.addEventListener('click', function () {
    document.body.classList.add('dark-theme-text-color');
    document.body.classList.add('dark-theme-bg-color');

    document.getElementById('logo-light').classList.add('hidden');
    document.getElementById('logo-dark').classList.remove('hidden');

    for (let navItem of navItems) {
        navItem.classList.add('dark-theme-text-color')
    }

    navItem1.classList.add('dark-theme-active');
    navItem1.classList.remove('active');

    moonFillLightBtn.classList.add('hidden');
    moonFillBtn.classList.remove('hidden');

    moonFillBtnImg.classList.add('active-toggle');

    sunFillBtnImg.classList.add('hidden');
    sunFillLightBtnImg.classList.remove('hidden');

    liveDemo.classList.add('dark-theme-active');
})

document.getElementById('btn-sun-fill').addEventListener('click', function () {
    document.body.classList.remove('dark-theme-text-color');
    document.body.classList.remove('dark-theme-bg-color');

    document.getElementById('logo-light').classList.remove('hidden');
    document.getElementById('logo-dark').classList.add('hidden');

    for (let navItem of navItems) {
        navItem.classList.remove('dark-theme-text-color')
    }

    navItem1.classList.remove('dark-theme-active');
    navItem1.classList.add('active');

    moonFillLightBtn.classList.remove('hidden');
    moonFillBtn.classList.add('hidden');

    moonFillBtnImg.classList.remove('active-toggle');

    sunFillBtnImg.classList.remove('hidden');
    sunFillLightBtnImg.classList.add('hidden');    

    liveDemo.classList.remove('dark-theme-active');
})

// for sidebar-theme-toggle at mobile devices
sidebarMoonFillLightBtn.addEventListener('click', function () {
    document.body.classList.add('dark-theme-text-color');
    document.body.classList.add('dark-theme-bg-color');

    document.getElementById('logo-light').classList.add('hidden');
    document.getElementById('logo-dark').classList.remove('hidden');

        sidebarMoonFillLightBtn.classList.add('hidden');
    sidebarMoonFillBtn.classList.remove('hidden');

    sidebarMoonFillBtnImg.classList.add('active-toggle');

     sidebarSunFillBtnImg.classList.add('hidden');
    sidebarSunFillLightBtnImg.classList.remove('hidden');

    liveDemo.classList.add('dark-theme-active');
})

document.getElementById('sidebar-btn-sun-fill').addEventListener('click', function () {
    document.body.classList.remove('dark-theme-text-color');
    document.body.classList.remove('dark-theme-bg-color');

    document.getElementById('logo-light').classList.remove('hidden');
    document.getElementById('logo-dark').classList.add('hidden');

    sidebarMoonFillLightBtn.classList.remove('hidden');
    sidebarMoonFillBtn.classList.add('hidden');

    sidebarMoonFillBtnImg.classList.remove('active-toggle');

    sidebarSunFillBtnImg.classList.remove('hidden');
    sidebarSunFillLightBtnImg.classList.add('hidden');

    liveDemo.classList.remove('dark-theme-active');
})