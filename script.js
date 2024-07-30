const myLibrary = ['The Hobbit', 'The Count of Monte Cristo', 'The Swiss Family Robinson'];

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
}

const cardsContainer = document.querySelector(".card-container");

function displayBookTitle() {
    let cards = cardsContainer.children;

    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i]);
        cards[i].textContent = myLibrary[i];
    }
}
displayBookTitle();