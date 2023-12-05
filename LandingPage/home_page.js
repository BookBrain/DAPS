document.addEventListener('DOMContentLoaded', function () {
    const addBookForm = document.getElementById('add-book-form');
    addBookForm.addEventListener('submit', handleAddBookForm);


    const showBookListButton = document.getElementById('show-book-list-button');
    const bookListPopup = document.getElementById('book-list-popup');
    const closePopupButton = document.getElementById('close-popup-button');

    function handleAddBookForm(event) {
        event.preventDefault();

        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const genreInput = document.getElementById('genre');

        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const genre = genreInput.value.trim();

        addBookToList(title, author, genre);

        titleInput.value = '';
        authorInput.value = '';
        genreInput.value = '';
    }

    function addBookToList(title, author, genre) {
        const bookListContainer = document.getElementById('book-list');

        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <p>Title: ${title}</p>
            <p>Author: ${author}</p>
            <p>Genre: ${genre}</p>
            <button class="delete-button" onclick="deleteBook(this)">Delete</button>
        `;

        bookListContainer.appendChild(bookItem);
    }

    showBookListButton.addEventListener('click', function () {
        bookListPopup.style.display = 'block';
    });

    closePopupButton.addEventListener('click', function () {
        bookListPopup.style.display = 'none';
    });

    window.deleteBook = function (button) {
        const bookItem = button.parentElement;
        bookItem.remove();
    };
});

function displayBookList() {
    const bookListContainer = document.getElementById('book-list-ul');
    bookListContainer.innerHTML = '';

    window.bookInventory.forEach((book, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title} by ${book.author}`;
        listItem.classList.add('book-list-item');

        listItem.addEventListener('click', () => showBookDetails(index));

        bookListContainer.appendChild(listItem);
    });
}
