let booksPerPage = 5;
let currentPage = 1;
let bookID = 10;
let sortByTitleAsc = true;
let sortByPriceAsc = true;
let currentLanguage = 'he';

function displayBooks() {
    let books = getBooks();

    if (sortByTitleAsc) {
        books.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortByPriceAsc) {
        books.sort((a, b) => a.price - b.price);
    }

    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const paginatedBooks = books.slice(startIndex, endIndex); 

    renderBooks(paginatedBooks);
    
    updatePagination(books.length);

}

function updatePagination(totalBooks) {
    const totalPages = Math.ceil(totalBooks / booksPerPage); 
    renderUpdatePagination(totalPages);
}

document.getElementById('addBookBtn').addEventListener('click', showAddBookForm);

function showAddBookForm() {
    renderAddBook();
}

function addBook() {
    const title = document.getElementById('newBookTitle').value;
    const price = document.getElementById('newBookPrice').value;
    const image = document.getElementById('newBookImage').value;

    if (title === '' || price === '' || image === '') {
        alert('Please fill in all fields');
        return;
    }

    const books = getBooks();
    const newId = ++bookID;

    const newBook = {
        id: newId,
        title: title,
        price: parseFloat(price),
        image: image,
        rating: 0
    };

    books.push(newBook);
    saveBooks(books);
    displayBooks();
    closeModal();
}

function showUpdateForm(bookId) {
    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    renderUpdate(book);
}

function updateBook(bookId) {
    const title = document.getElementById('bookTitle').value;
    const price = document.getElementById('bookPrice').value;
    const image = document.getElementById('bookImage').value;

    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    book.title = title;
    book.price = parseFloat(price);
    book.image = image;

    saveBooks(books);
    displayBooks();
}

function deleteBook(bookId) {
    const books = getBooks().filter(b => b.id !== bookId);
    saveBooks(books);
    displayBooks();
}

function showBookDetails(bookId) {
    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    renderBookDetails(book);
}

function saveRating(bookId) {
    const rate = document.getElementById('rate').value;
    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    book.rating = rate;
    saveBooks(books);
}

document.querySelector('#prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayBooks();
    }
});

document.querySelector('#nextPage').addEventListener('click', () => {
    const books = getBooks();
    const totalPages = Math.ceil(books.length / booksPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayBooks();
    }
});

const sortTitle = () => {
    sortByPriceAsc = false;
    sortByTitleAsc = true;
    displayBooks();
};

const sortPrice =  () => {
    sortByTitleAsc = false;
    sortByPriceAsc = true;
    displayBooks();
};

function updateTexts() {
    document.getElementById('title').innerText = translations[currentLanguage].title;

    document.getElementById('addBookBtn').innerText = translations[currentLanguage].addBook;

    document.getElementById('languageSwitcher').innerText = translations[currentLanguage].languageSwitcher;

    const headers = document.querySelectorAll('.book-list-h div');
    headers[0].innerText = translations[currentLanguage].id;
    headers[1].innerText = translations[currentLanguage].titleColumn;
    headers[2].innerText = translations[currentLanguage].priceColumn;
    headers[3].innerText = translations[currentLanguage].read;
    headers[4].innerText = translations[currentLanguage].update;
    headers[5].innerText = translations[currentLanguage].delete;

    const details = document.getElementById('bookDetails');
    details.querySelector('h3').innerText = translations[currentLanguage].bookDetails;
    details.querySelector('p').innerText = translations[currentLanguage].selectBook;

    // document.title = translations[currentLanguage].read;
    // document.getElementById('read').innerText = translations[currentLanguage].languageSwitcher;

    // document.title = translations[currentLanguage].update;
    // document.getElementById('update').innerText = translations[currentLanguage].languageSwitcher;

    // document.title = translations[currentLanguage].delete;
    // document.getElementById('delete').innerText = translations[currentLanguage].languageSwitcher;


}

document.getElementById('languageSwitcher').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'he' : 'en'; // החלפת שפה
    updateTexts(); // עדכון הטקסטים לפי השפה החדשה
});

// קריאה ראשונית כדי לעדכן את הטקסטים בעת טעינת הדף
updateTexts();


displayBooks();