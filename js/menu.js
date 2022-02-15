// This module will create a 2*3 grid containing information 
// There will be 3 blocks of information on the items
// There will be 3 titles and 3 paragraphs
// There will be 3 accompanying images
export function generateMenu() {
    // Creating Elements 
    // Sections
    const content = document.querySelector('#content');
    const grid = document.createElement('section');
    const infoSection1 = document.createElement('section');
    const infoSection2 = document.createElement('section');
    const infoSection3 = document.createElement('section');
    const imageSection1 = document.createElement('section');
    const imageSection2 = document.createElement('section');
    const imageSection3 = document.createElement('section');

    // Info
    const title1 = document.createElement('h2');
    const title2 = document.createElement('h2');
    const title3 = document.createElement('h2');
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    const paragraph3 = document.createElement('p');

    // Images
    const image1 = document.createElement('img');
    const image2 = document.createElement('img');
    const image3 = document.createElement('img');
    const imageLink1 = '../src/assets/images/break-a-bar.jpeg';
    const imageLink2 = '../src/assets/images/kick-kat.jpg';
    const imageLink3 = '../src/assets/images/dog-poop-emoji.jpg';

    const textParagraph1 =
        "The Lifeline of Break-a-Bar. This is the bar that started it all,\
    a single bite out of this will make you feel the Lord's warm embrace.";

    const textParagraph2 =
        "The Kick Kat is our spin on Hershey's Kit Kat chocolate bar.\
    We did it better. Try it. We dare you.";

    const textParagraph3 =
        "Watcha Doin? Eatin chocolate! Where'd you get it? The Doggy Dropped It!\
    Ali's Own is a delicious moist brownie with a funny take!";

    // Manipulating Element Attributes

    // Sections
    grid.className = 'grid-menu';
    infoSection1.className = 'info-section-1';
    infoSection2.className = 'info-section-2';
    infoSection3.className = 'info-section-3';
    imageSection1.className = 'image-section-1';
    imageSection2.className = 'image-section-2';
    imageSection3.className = 'image-section-3';

    // Info
    title1.textContent = 'Break-a-Bar'
    title2.textContent = 'Kick Kat'
    title3.textContent = "Ali's Own";
    paragraph1.textContent = textParagraph1;
    paragraph2.textContent = textParagraph2;
    paragraph3.textContent = textParagraph3;

    // Images
    image1.setAttribute('src', imageLink1);
    image2.setAttribute('src', imageLink2);
    image3.setAttribute('src', imageLink3);

    // Clearing old content
    content.innerHTML = '';

    // Appending Elements in Correct Order
    content.append(grid);
    grid.append(infoSection1, infoSection2, infoSection3,
        imageSection1, imageSection2, imageSection3);
    infoSection1.append(title1, paragraph1);
    infoSection2.append(title2, paragraph2);
    infoSection3.append(title3, paragraph3);
    imageSection1.append(image1);
    imageSection2.append(image2);
    imageSection3.append(image3);

}

