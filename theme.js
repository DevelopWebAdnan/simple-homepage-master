console.log('Added the theme.js file to toggle theme.');

// for theme-toggle at large devices
// document.getElementById('theme-toggle').addEventListener('click', function() {
const moonFillLightBtn = document.getElementById('btn-moon-fill-light');
const sidebarMoonFillLightBtn = document.getElementById('sidebar-btn-moon-fill-light');

// const moonFillLightBtn = document.getElementsByClassName('btn-moon-fill-light')[0];
// const moonFillLightBtn = document.getElementsByClassName('btn-moon-fill-light');
console.log(moonFillLightBtn, sidebarMoonFillLightBtn);
const moonFillBtn = document.getElementById('btn-moon-fill');
const sunFillBtn = document.getElementById('btn-sun-fill');

const navItems = document.getElementsByClassName('nav-item');
console.log(navItems);
const navItem1 = document.getElementsByClassName('nav-item')[0];
console.log(navItem1);

const moonFillBtnImg = moonFillBtn.querySelector('#btn-moon-fill img');
console.log(moonFillBtnImg);
const sunFillBtnImg = sunFillBtn.querySelector('#btn-sun-fill img');
const sunFillLightBtnImg = sunFillBtn.querySelector('#btn-sun-fill span');
console.log(sunFillBtnImg, sunFillLightBtnImg);

const liveDemo = document.getElementsByClassName('live-demo')[0]
console.log(liveDemo);

moonFillLightBtn.addEventListener('click', function () {
    console.log('Clicked on the moon-fill-light button to toggle the theme');
    document.body.classList.add('dark-theme-text-color');
    document.body.classList.add('dark-theme-bg-color');

    document.getElementById('logo-light').classList.add('hidden');
    document.getElementById('logo-dark').classList.remove('hidden');

    for (let navItem of navItems) {
        // console.log(navItem);
        navItem.classList.add('dark-theme-text-color')
    }

    navItem1.classList.add('dark-theme-active');
    navItem1.classList.remove('active');

    moonFillLightBtn.classList.add('hidden');
    moonFillBtn.classList.remove('hidden');

    // const moonFillBtnImg = moonFillBtn.querySelector('#btn-moon-fill img');
    // console.log(moonFillBtnImg);
    moonFillBtnImg.classList.add('active-toggle');

    // sunFillBtnImg.classList.remove('active-toggle');
    sunFillBtnImg.classList.add('hidden');
    sunFillLightBtnImg.classList.remove('hidden');

    // const btnLiveDemo = document.getElementById('btn-live-demo')
    liveDemo.classList.add('dark-theme-active');
})

document.getElementById('btn-sun-fill').addEventListener('click', function () {
    console.log('Clicked on the sun-fill button to toggle the theme');
    document.body.classList.remove('dark-theme-text-color');
    document.body.classList.remove('dark-theme-bg-color');

    document.getElementById('logo-light').classList.remove('hidden');
    document.getElementById('logo-dark').classList.add('hidden');
    for (let navItem of navItems) {
        // console.log(navItem);
        navItem.classList.remove('dark-theme-text-color')
    }

    navItem1.classList.remove('dark-theme-active');
    navItem1.classList.add('active');

    moonFillLightBtn.classList.remove('hidden');
    moonFillBtn.classList.add('hidden');

    moonFillBtnImg.classList.remove('active-toggle');

    sunFillBtnImg.classList.remove('hidden');
    sunFillLightBtnImg.classList.add('hidden');

    // document.getElementById('btn-live-demo').classList.remove('dark-theme-active-link')
    liveDemo.classList.remove('dark-theme-active');
})

// for sidebar-theme-toggle at mobile devices
sidebarMoonFillLightBtn.addEventListener('click', function () {
    console.log('Clicked on the sidebar-moon-fill-light button to toggle the theme');
    document.body.classList.add('dark-theme-text-color');
    document.body.classList.add('dark-theme-bg-color');

    document.getElementById('logo-light').classList.add('hidden');
    document.getElementById('logo-dark').classList.remove('hidden');

    for (let navItem of navItems) {
        // console.log(navItem);
        navItem.classList.add('dark-theme-text-color')
    }

    navItem1.classList.add('dark-theme-active');
    navItem1.classList.remove('active');

    moonFillLightBtn.classList.add('hidden');
    moonFillBtn.classList.remove('hidden');
    moonFillBtnImg.classList.add('active-toggle');

    // sunFillBtnImg.classList.remove('active-toggle');
    sunFillBtnImg.classList.add('hidden');
    sunFillLightBtnImg.classList.remove('hidden');

    // const btnLiveDemo = document.getElementById('btn-live-demo')
    liveDemo.classList.add('dark-theme-active');
})

document.getElementById('sidebar-btn-sun-fill').addEventListener('click', function () {
    console.log('Clicked on the sidebar-sun-fill button to toggle the theme');
    document.body.classList.remove('dark-theme-text-color');
    document.body.classList.remove('dark-theme-bg-color');

    document.getElementById('logo-light').classList.remove('hidden');
    document.getElementById('logo-dark').classList.add('hidden');
    for (let navItem of navItems) {
        // console.log(navItem);
        navItem.classList.remove('dark-theme-text-color')
    }

    navItem1.classList.remove('dark-theme-active');
    navItem1.classList.add('active');

    moonFillLightBtn.classList.remove('hidden');
    moonFillBtn.classList.add('hidden');

    moonFillBtnImg.classList.remove('active-toggle');

    sunFillBtnImg.classList.remove('hidden');
    sunFillLightBtnImg.classList.add('hidden');

    // document.getElementById('btn-live-demo').classList.remove('dark-theme-active-link')
    liveDemo.classList.remove('dark-theme-active');
})