let myLibrary = [];
const getCardsContainer = document.querySelector(".cards-container");
const getAddBookBtn = document.querySelector(".add-book-btn");
const getBookDialog = document.querySelector(".add-book-dialog");
const getInputBookTitle = document.querySelector(".input-book-title");
const getInputBookAuthor = document.querySelector(".input-book-author");
const getInputBookYear = document.querySelector(".input-book-year");
const getSubmitBookBtn = document.querySelector(".submit-book-btn");
const getRadioBtnStatusRead = document.querySelector(".status-read-radio-btn");
const getRadioBtnStatusNotRead = document.querySelector(".status-unread-radio-btn");
let setRemoveBookBtn = "";
let setReadStatusBtn = "";

function Book(title, author, year, readStatus) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.createdAt = Date.now();
    this.readStatus = readStatus;
}

function displayBook(book) {
  const card = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardAuthor = document.createElement("h2");
  const cardYear = document.createElement("h2");
  const removeBookBtn = document.createElement("button");
  const readStatusBtn = document.createElement("button");
    setRemoveBookBtn = removeBookBtn;
    setReadStatusBtn = readStatusBtn;
    card.setAttribute("class", ".card");
    card.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-between; background-color: lightblue; padding: 15px; border-radius: 0.5em; box-shadow: 2px 2px 6px #6b4600; ");

    cardTitle.textContent = book.title;
    cardAuthor.textContent = book.author;
    cardYear.textContent = book.year;
    
    removeBookBtn.value = book.createdAt;
    removeBookBtn.setAttribute("class", "remove-book-btn");
    removeBookBtn.textContent = "Remove Book";

    readStatusBtn.setAttribute("class", "read-status-btn");
    readStatusBtn.textContent = book.readStatus;

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardYear);
    card.appendChild(removeBookBtn);
    card.appendChild(readStatusBtn);

    getCardsContainer.appendChild(card);

    const tempLibrary = myLibrary;
    myLibrary = [];
    for (let i = 0; i < tempLibrary.length; i++) {
      myLibrary.push(tempLibrary[i]);
    }
}

let radioBtnClick = "";
function checkRadio() {
  if (getRadioBtnStatusRead.checked) {
    radioBtnClick = getRadioBtnStatusRead.value;
  } else if (getRadioBtnStatusNotRead.checked) {
    radioBtnClick = getRadioBtnStatusNotRead.value;
  }
}

function addBookToLibrary(newTitle, newAuthor, newYear, newRadioStatus) {
    const newBook = new Book(newTitle, newAuthor, newYear, newRadioStatus);
    myLibrary.push(newBook);
    displayBook(newBook);
}

function removeCard(evt) {
  const timeStamp = Number(evt.target.value);
  if (Number(evt.target.value) === timeStamp) {
      evt.target.parentElement.remove();
  }
}

function changeReadStatus(evt) {
  if (evt.target.textContent === "READ") {
    evt.target.textContent = "NOT READ";
  } else {
    evt.target.textContent = "READ";
  }
}

//Bug: if multiple cards are created, only last card's read status can change.

getAddBookBtn.addEventListener("click", () => {
    getBookDialog.showModal();
})

getSubmitBookBtn.addEventListener("click", (event) => {
    checkRadio();
    addBookToLibrary(getInputBookTitle.value, getInputBookAuthor.value, getInputBookYear.value, radioBtnClick);
    getBookDialog.close();
    event.preventDefault();  
})

getCardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-book-btn")) {
    removeCard(event);
  } else if (event.target.classList.contains("read-status-btn")) {
    changeReadStatus(event);
  }
});
