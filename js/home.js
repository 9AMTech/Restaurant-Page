// This file contains the content to be generated when the home button is clicked
export function generateHome(counter) {
    // Defining Variables
    const content = document.querySelector('#content');
    // We want there to be default data, so if counter != 0, it'll clear it.
    // When the function runs once it'll make this content able to be deleted
    if (counter !== 0) {
        content.innerHTML = '';
    }
    const gridWrapper = document.createElement('section');
    const logoSection = document.createElement('section');
    const logoImage = document.createElement('img');
    const logoLink = '../src/assets/images/break-a-bar-logo.jpg';
    const paraSection = document.createElement('section');
    const paraParagraph = document.createElement('p');
    const paraText =
        "\
            Break-a-Bar is a small mom and pop company founded in Arizona.\
        Break-a-Bar's most experienced chocolate craftsman is Jason Hall,\
        who hails from a long lineage of legendary chocolateers from Eastern Europe.\
        Every bar made from his hands is made with promise.";

    const quoteSection = document.createElement('section');
    const quoteParagraph = document.createElement('p');
    const quoteText = "\"It'll be a clean snap, or your money back!\"";

    const hoursSection = document.createElement('section');
    const hoursTableTitle = document.createElement('p');
    const hoursTableTitleText = 'Hours';

    // Goal is to create a 2 x 4 Table
    const hoursTable = document.createElement('table');
    const hoursColumn1 = ['M', 'T', 'W', 'Th'];
    const hoursColumn2 = ['10 AM - 3 PM'];
    let hoursTableRows = [];
    let hoursTableDataColumn1 = [];
    let hoursTableDataColumn2 = [];

    // Making a loop to fill it with the respective elements
    for (let i = 0; i <= 3; i++) {
        // Fills hoursTableRows with 4 tr elements
        hoursTableRows[i] = document.createElement('tr');

        // These lines fill hoursTableDataColumn1/2 with td elements
        hoursTableDataColumn1[i] = document.createElement('td');
        hoursTableDataColumn2[i] = document.createElement('td');

        // These lines put the correct data into each columns td
        hoursTableDataColumn1[i].innerText = hoursColumn1[i];
        hoursTableDataColumn2[i].innerText = hoursColumn2[0];

        // These lines put the correct column data in the correct rows
        hoursTable.appendChild(hoursTableRows[i]);
        hoursTableRows[i].appendChild(hoursTableDataColumn1[i]);
        hoursTableRows[i].appendChild(hoursTableDataColumn2[i]);
    }


    // Manipulating Elements
    // The Grid
    gridWrapper.className = 'grid-home';
    // Logo Stuff
    logoSection.className = 'logo-section';
    logoImage.className = 'logo-section-image';
    logoImage.setAttribute('src', logoLink);

    // Paragraph Stuff
    paraSection.className = 'para-section';
    paraParagraph.className = 'para-paragraph';
    paraParagraph.textContent = paraText;

    // Quote Stuff
    quoteSection.className = 'quote-section';
    quoteParagraph.className = 'quote-paragraph';
    quoteParagraph.textContent = quoteText;

    // Hours Stuff
    hoursSection.className = 'hours-section';
    hoursTable.className = 'hours-table';
    hoursTableTitle.className = 'hours-table-title';
    hoursTableTitle.textContent = hoursTableTitleText;

    // Updating Counter
    counter++;

    // Appending elements in correct order
    content.appendChild(gridWrapper);
    gridWrapper.appendChild(paraSection);
    paraSection.appendChild(paraParagraph);
    gridWrapper.appendChild(quoteSection);
    quoteSection.appendChild(quoteParagraph);
    gridWrapper.appendChild(logoSection);
    logoSection.appendChild(logoImage);
    gridWrapper.appendChild(hoursSection);
    hoursSection.appendChild(hoursTableTitle);
    hoursSection.appendChild(hoursTable);

}