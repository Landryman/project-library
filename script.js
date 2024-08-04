const myLibrary = [];

const cardsContainer = document.querySelector(".cards-container");
const card = document.createElement("div");
card.setAttribute("class", ".card");
card.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-between; background-color: lightblue; padding: 30px; border-radius: 0.5em; box-shadow: 2px 2px 6px #6b4600;");
const cardTitle = document.createElement("h2");
const cardAuthor = document.createElement("h2");
const cardYear = document.createElement("h2");
const addBookBtn = document.querySelector(".add-book-btn");
const removeBookBtn = document.createElement("button");
removeBookBtn.setAttribute("class", ".remove-card-btn");
removeBookBtn.textContent = "Remove Book";
const getBookDialog = document.querySelector(".add-book-dialog");
const inputBookTitle = document.querySelector(".input-book-title");
const inputBookAuthor = document.querySelector(".input-book-author");
const inputBookYear = document.querySelector(".input-book-year");
const submitBook = document.querySelector(".submit-book-btn");

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.createdAt = Date.now();
    // the constructor...
}

function displayBook(newBook) {
    const bookValues = Object.values(newBook);

    cardsContainer.appendChild(card);
    card.appendChild(removeBookBtn);
    card.insertBefore(cardTitle, removeBookBtn);
    card.insertBefore(cardAuthor, cardTitle);
    card.insertBefore(cardYear, cardAuthor);

    const cardChildren = card.children;

    for (let i = 0; i < cardChildren.length - 1; i++) {
        cardChildren[i].textContent = bookValues[i];
    }
    console.log(Object.values(myLibrary[0]));
}

function addBookToLibrary(newTitle, newAuthor, newYear) {
    const book = new Book(newTitle, newAuthor, newYear);
    myLibrary.push(book);
    displayBook(book);
}

addBookBtn.addEventListener("click", () => {
    getBookDialog.showModal();
})

submitBook.addEventListener("click", (event) => {
    addBookToLibrary(inputBookTitle.value, inputBookAuthor.value, inputBookYear.value);
    getBookDialog.close();
    event.preventDefault();

})

