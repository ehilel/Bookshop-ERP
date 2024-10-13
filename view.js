const translations = {
    en: {
        title: "Bookshop ERP",
        languageSwitcher: "languageSwitcher",
        addBook: "+ New Book",
        id: "ID",
        titleColumn: "Title",
        priceColumn: "Price",
        read: "Read",
        update: "Update",
        delete: "Delete",
        bookDetails: "Book Details",
        selectBook: "Select a book to see details."
    },
    he: {
        title: "חנות ספרים",
        languageSwitcher: "החלפת שפה",
        addBook: "+ ספר חדש",
        id: ".ת.ז",
        titleColumn: "כותרת",
        priceColumn: "מחיר",
        read: "קרא",
        update: "עדכן",
        delete: "מחק",
        bookDetails: "פרטי ספר",
        selectBook: "בחר ספר כדי לראות פרטים."
    }
};

const getBook =  (book) => {
    return `
            <div class="book-list">
            <div>${book.id}</div>
            <div>${book.title}</div>
            <div>${book.price.toFixed(2)}</div>
            <button id="read" class="read" onclick="showBookDetails(${book.id})">Read</button>
            <button id="update" class="update" onclick="showUpdateForm(${book.id})">Update</button>
            <button id="delete" class="delete" onclick="deleteBook(${book.id})">Delete</button>
            </div>`
}


const renderBooks = (books) =>{
    let bookGrid = document.getElementById('book-list');
    bookGrid.innerHTML = ``;
    books.forEach(book => {
        bookGrid.innerHTML += getBook(book); 
    })
   
}

const renderUpdatePagination = (totalPages) => {
    const pageNumbers = document.querySelector('#pageNumbers');
    pageNumbers.innerHTML = ''; 

    for (let i = 1; i <= totalPages; i++) {
        const span = document.createElement('span');
        span.textContent = i;

        if (i === currentPage) {
            span.classList.add('current-page');
        }

        span.addEventListener('click', () => {
            currentPage = i; 
            displayBooks(); 
        });

        pageNumbers.appendChild(span);
    }
}

const renderAddBook = () => {
    const modal = document.getElementById('bookDetails');
    modal.innerHTML = `
        <h2>Add New Book</h2>
        <label>Title: </label><input type="text" id="newBookTitle"><br>
        <label>Price: </label><input type="number" id="newBookPrice"><br>
        <label>Image URL: </label><input type="text" id="newBookImage"><br>
        <button onclick="addBook()">Add</button>
        <button onclick="closeModal()">Close</button>
    `;

}

const renderUpdate = (book) => {
    const modal = document.getElementById('bookDetails');
    modal.innerHTML = `
      <h2>Update Book</h2>
      <label>Title: </label><input type="text" id="bookTitle" value="${book.title}"><br>
      <label>Price: </label><input type="number" id="bookPrice" value="${book.price}"><br>
      <label>Image URL: </label><input type="text" id="bookImage" value="${book.imageUrl}"><br>
      <button onclick="updateBook(${book.Id})">Save</button>
    `;
}

const renderBookDetails = (book) =>{
    const detailsDiv = document.getElementById('bookDetails');
    detailsDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Price: $${book.price}</p>
      <img id="imgBook" src="${book.imageUrl}" alt="${book.title}">
      <div>
      <label for="rate">Rate:</label>
      <input type="number" id="rate" min="1" max="10" value="${book.rating}">
      <button onclick="saveRating(${book.id})">Save Rating</button>
    `;
}


