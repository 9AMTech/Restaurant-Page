// This module will fill #content with all information regarding contact information 
export function generateContact() {
    // Creating Elements
    const content = document.querySelector('#content');
    const contactWrapper = document.createElement('section')
    const title = document.createElement('h1');
    const daMan = document.createElement('p');
    const address = document.createElement('p');
    const phoneNumber = document.createElement('p');

    // Manipulating Elements
    contactWrapper.className = 'contact-wrapper';
    title.textContent = 'Get in Touch';
    daMan.textContent = "Jason Bartholomew Hall"
    address.textContent = "11275 E Via Linda, Scottsdale AZ 85259";
    phoneNumber.textContent = '(973)-356-1208';

    // Clearning old content
    content.innerHTML = '';

    // Appending Elements
    content.append(contactWrapper);
    contactWrapper.append(title, daMan, address, phoneNumber);
}