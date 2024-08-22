const cardsContainer = document.querySelector(".cards-container");
const card = document.createElement("div");
    card.setAttribute("class", ".card");
const cardTitle = document.createElement("h2");
    const cardAuthor = document.createElement("h2");
    const cardYear = document.createElement("h2");
const addBookBtn = document.querySelector(".add-book-btn");
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
}

function displayBook(book) {
    
    card.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-between; background-color: lightblue; padding: 15px; border-radius: 0.5em; box-shadow: 2px 2px 6px #6b4600; ");
    cardsContainer.appendChild(card);
    
    const removeBookBtn = document.createElement("button");
    removeBookBtn.setAttribute("class", "remove-book-btn");
    removeBookBtn.textContent = "Remove Book";
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardYear);
    card.appendChild(removeBookBtn);
    cardTitle.textContent = book.title;
    cardAuthor.textContent = book.author;
    cardYear.textContent = book.year;
    removeBookBtn.value = book.createdAt;
    let myCards = document.querySelectorAll(".card");
  
    console.dir(myCards);
    for (let i = 0; i < myCards.length; i++) {
      newLibrary[i].push(book);
      myLibrary[i].shift();
      myLibrary[i].push(book);
    }
 
}

function addBookToLibrary(newTitle, newAuthor, newYear) {
    const newBook = new Book(newTitle, newAuthor, newYear);
    displayBook(newBook);
}

function removeCard(evt) {
  const timeStamp = Number(evt.target.value);
  if (Number(evt.target.value) === timeStamp) {
      evt.target.parentElement.remove();
  }
}

addBookBtn.addEventListener("click", () => {
    getBookDialog.showModal();
})

submitBook.addEventListener("click", (event) => {
    addBookToLibrary(inputBookTitle.value, inputBookAuthor.value, inputBookYear.value);
    getBookDialog.close();
    event.preventDefault();
      
})

cardsContainer.addEventListener("click", removeCard);

