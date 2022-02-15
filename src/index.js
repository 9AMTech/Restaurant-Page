import './styles.css';
import { generateHome } from './js/home.js';
import { generateMenu } from './js/menu.js';
import { generateContact } from './js/contact.js';

// Creating the Nav Bar
const navBar = (function () {

    // Defining Variables
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const logo = document.createElement('section');
    const logoText = document.createElement('p');
    const nav = document.createElement('nav');
    const navBar = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    // Manipulating Nodes
    // Logo Stuff
    logo.className = 'logo';
    logoText.innerText = '𝔹𝕣𝕖𝕒𝕜-𝕒-𝔹𝕒𝕣';
    logoText.className = 'logo-text';

    // Nav Bar Buttons
    nav.classList = 'nav-bar';
    home.textContent = 'HOME';
    menu.textContent = 'MENU';
    contact.textContent = 'CONTACT';

    // Appending elements in correct order
    body.prepend(header);
    header.append(logo, nav);
    logo.appendChild(logoText);
    nav.append(navBar)
    navBar.append(home, menu, contact);

    return {
        home: home,
        menu: menu,
        contact: contact
    }
})();


// Creating event listeners for each button, then pulls the div content from each respective module
// On click, will delete div id=content and render in the new content
const navLogic = (function () {
    const pageList = [navBar.home, navBar.menu, navBar.contact];

    // Adding default actions to happen when the page loads.
    const content = document.querySelector('#content');
    let counter = 0;
    generateHome(counter);

    navBar.home.className = 'active';
    const activePage = (currentPage) => {
        for (let p = 0; p < 3; p++) {
            if (pageList[p].classList.contains('active') == true) {
                pageList[p].classList.toggle('active');
            }
        }
        currentPage.className = 'active';
    }


    navBar.home.addEventListener('click', () => {
        generateHome();
        activePage(navBar.home);
    });

    navBar.menu.addEventListener('click', () => {
        generateMenu();
        activePage(navBar.menu);
    });

    navBar.contact.addEventListener('click', () => {
        generateContact();
        activePage(navBar.contact);
    });


    return {
        counter: counter,
    }

})();
