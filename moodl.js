const initialBooks  = [
  { id: 1, title: 'The Hobbit', price: 34.00, imageUrl: "https://m.media-amazon.com/images/I/71jD4jMityL._AC_UF1000,1000_QL80_.jpg", rating: 0 },
  { id: 2, title: 'The Hitchhiker’s Guide to the Galaxy', price: 13.95, imageUrl: "https://m.media-amazon.com/images/I/81F3posFCxL._AC_UF1000,1000_QL80_.jpg", rating: 0 },
  { id: 3, title: 'The Lord Of The Rings', price: 32.55, imageUrl: "https://www.booknet.co.il/Images/Site/Products/org/9780261103252.jpg", rating: 0 },
  { id: 4, title: 'The Catcher in the Rye', price: 4.55, imageUrl: "https://m.media-amazon.com/images/I/819f7DOZwpL._AC_UF1000,1000_QL80_.jpg", rating: 0 },
  { id: 5, title: 'Effective Modern C++', price: 34.00, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENn-1zu6qjnPKDPPz6FtlGCNzQ-UhkshjRw&s", rating: 0 },
  { id: 6, title: 'The Silmarillion', price: 23.95, imageUrl: "https://www.booknet.co.il/Images/Site/Products/org/9780261102736.jpg", rating: 0 },
  { id: 7, title: 'Dune', price: 25.00, imageUrl: "https://third-ear.com/wp-content/uploads/2021/08/71pUK2k0uHL.jpg", rating: 0 },
  { id: 8, title: '1984', price: 5.00, imageUrl: "https://m.media-amazon.com/images/I/71-3aO8sW5L.jpg", rating: 0 },
  { id: 9, title: 'Fahrenheit 451', price: 7.99, imageUrl: "https://www.danibooks.co.il/GoopSitesFiles/83758/User/catalog_528420-l.webp?638505170732500000", rating: 0 },
  { id: 10, title: 'Brave New World', price: 9.99, imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg", rating: 0 },
];

  
  if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify(initialBooks));
  }
  
  function getBooks() {
    return JSON.parse(localStorage.getItem('books'));
  }
  
  function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }