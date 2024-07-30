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

const addBookBtn = document.querySelector(".add-book-btn");

addBookBtn.addEventListener("click", () => {
    const form = document.createElement("form");
    form.setAttribute("class", "add-book-form");
    form.style.display = "flex";
    form.style.alignItems = "center";
    form.style.padding = "40px";
    form.style.gap = "20px";
    const formLabel = document.createElement("label");
    const formInput = document.createElement("input");
    const formSubmitBtn = document.createElement("button");
})