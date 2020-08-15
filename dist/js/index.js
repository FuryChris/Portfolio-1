//DOM SELECTORS
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Initial Menu State
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => {
            item.classList.add('show');
        });
        // Set Menu State
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => {
            item.classList.remove('show');
        })
        showMenu = false;
    }
}

var modal = document.getElementById("myModal");

const descriptions = [
    'NodeJS based project - virtual shop. Lot of things were covered during creating this app, like: static files handling, express.js, MongoDB templating engines, adjusting app to be RESTfull API, MVC Pattern, Authentication, Authorization, Error Handling, generating PDF on the fly, sending e-mails (with SendGrid), handling payments (with Stripe.js), etc...',
    'Project of cinema site with different reservation including movie select, and seats select. This is RESTfull APP build with using of React, NodeJS, MongoDB',
    'To Do application based on NodeJS.',
    'Gif searching app using GIPHY API with fetch method.',
    'Roguelike game based on React. In this project are used features like: ES6, Hooks, Objects, Classess, etc...',
    'Searching content using Youtube Data API ',
    'Tic Tac Toe browser game - project build on ReactJS.',
]
// Get the image and insert it inside the modal"alt" text as a caption

var img = document.getElementsByClassName("projpic");
const arrayimg = [...img];

arrayimg.forEach((img, index) => {
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var descText = document.getElementById("desc-img");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        descText.innerHTML = descriptions[index];
    }
})


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}