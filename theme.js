// console.log('Added the theme.js file to toggle theme.');

// document.getElementById('theme-toggle').addEventListener('click', function() {
const moonFillLightBtn = document.getElementById('btn-moon-fill-light');
const moonFillBtn = document.getElementById('btn-moon-fill');
const sunFillBtn = document.getElementById('btn-sun-fill');

const navItems = document.getElementsByClassName('nav-item');
    // console.log(navItems);
    const navItem1 = document.getElementsByClassName('nav-item')[0];
    // console.log(navItem1);

    const moonFillBtnImg = moonFillBtn.querySelector('#btn-moon-fill img');
    // console.log(moonFillBtnImg);
    const sunFillBtnImg = sunFillBtn.querySelector('#btn-sun-fill img');
    const sunFillLightBtnImg = sunFillBtn.querySelector('#btn-sun-fill span');
    // console.log(sunFillBtnImg, sunFillLightBtnImg);

        const liveDemo = document.getElementsByClassName('live-demo')[0]
    // console.log(liveDemo);

moonFillLightBtn.addEventListener('click', function() {
    console.log('Clicked on the moon-fill-light button to toggle the theme');
    document.body.classList.add('dark-theme-text-color');
    document.body.classList.add('dark-theme-bg-color');

    document.getElementById('logo-light').classList.add('hidden');
    document.getElementById('logo-dark').classList.remove('hidden');
    // const navItems = document.getElementsByClassName('nav-item');
    // console.log(navItems);
    for(let navItem of navItems) {
        console.log(navItem);
        navItem.classList.add('dark-theme-text-color')
    }

    // const navItem1 = document.getElementsByClassName('nav-item')[0];
    // console.log(navItem1);
    navItem1.classList.add('dark-theme-active');
    navItem1.classList.remove('active');

    moonFillLightBtn.classList.add('hidden');
    moonFillBtn.classList.remove('hidden');

    // const moonFillBtnImg = document.getElementById('btn-moon-fill').children();
    // const moonFillBtnImg = document.getElementById('btn-moon-fill').childNodes();
    // const moonFillBtnImg = document.getElementById('btn-moon-fill').firstChild();
    // const moonFillBtnImg = moonFillBtn.firstChild();
    // const moonFillBtnImg = moonFillBtn.childNodes();
    // const moonFillBtnImg = moonFillBtn.children();
    // const moonFillBtnImg = moonFillBtn.lastChild();
    // const moonFillBtnImg = moonFillBtn.lastElementChild();
    // const moonFillBtnImg = moonFillBtn.firstChild();
    // const moonFillBtnImg = moonFillBtn.firstElementChild();
    // const moonFillBtnImg = moonFillBtn.parentElement();
    // const moonFillBtnImg = moonFillBtn.parentNode();
    // const moonFillBtnImg = moonFillBtn.previousElementSibling();
    // const moonFillBtnImg = moonFillBtn.previousSibling();
    // const moonFillBtnImg = moonFillBtn.querySelector('#btn-moon-fill img');
    // console.log(moonFillBtnImg);
    moonFillBtnImg.classList.add('active-toggle');

    // const sunFillBtnImg = sunFillBtn.querySelector('#btn-sun-fill img');
    // const sunFillLightBtnImg = sunFillBtn.querySelector('#btn-sun-fill span');
    // console.log(sunFillBtnImg, sunFillLightBtnImg);
    // sunFillBtnImg.classList.remove('active-toggle');
    sunFillBtnImg.classList.add('hidden');
    sunFillLightBtnImg.classList.remove('hidden');

    // const btnLiveDemo = document.getElementById('btn-live-demo')
    // const liveDemo = document.getElementsByClassName('live-demo')[0]
    // console.log(liveDemo);
    liveDemo.classList.add('dark-theme-active');
})

document.getElementById('btn-sun-fill').addEventListener('click', function() {
    console.log('Clicked on the sun-fill button to toggle the theme');
    document.body.classList.remove('dark-theme-text-color');
    document.body.classList.remove('dark-theme-bg-color');

    document.getElementById('logo-light').classList.remove('hidden');
    document.getElementById('logo-dark').classList.add('hidden');
    // const navItems = document.getElementsByClassName('nav-item');
    // console.log(navItems);
    for(let navItem of navItems) {
        // console.log(navItem);
        navItem.classList.remove('dark-theme-text-color')
    }

    // const navItem1 = document.getElementsByClassName('nav-item')[0];
    // console.log(navItem1);
    navItem1.classList.remove('dark-theme-active');
    navItem1.classList.add('active');

    moonFillLightBtn.classList.remove('hidden');
    moonFillBtn.classList.add('hidden');

    // const moonFillBtnImg = moonFillBtn.querySelector('#btn-moon-fill img');
    // console.log(moonFillBtnImg);
    moonFillBtnImg.classList.remove('active-toggle');

    // const sunFillBtnImg = sunFillBtn.querySelector('#btn-sun-fill img');
    // const sunFillLightBtnImg = sunFillBtn.querySelector('#btn-sun-fill span');
    // console.log(sunFillBtnImg, sunFillLightBtnImg);
sunFillBtnImg.classList.remove('hidden');
    sunFillLightBtnImg.classList.add('hidden');

        // document.getElementById('btn-live-demo').classList.remove('dark-theme-active-link')
    //     const liveDemo = document.getElementsByClassName('live-demo')[0]
    // console.log(liveDemo);
    liveDemo.classList.remove('dark-theme-active');
})