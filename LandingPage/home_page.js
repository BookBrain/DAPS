document.addEventListener('DOMContentLoaded', function () {
    const addBookForm = document.getElementById('add-book-form');
    addBookForm.addEventListener('submit', handleAddBookForm);

    const showBookListButton = document.getElementById('show-book-list-button');
    const bookListPopup = document.getElementById('book-list-popup');
    const closePopupButton = document.getElementById('close-popup-button');

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        searchBooks(searchTerm);
    });

    function searchBooks(query) {
        const bookListContainer = document.getElementById('book-list');
        const bookItems = bookListContainer.getElementsByClassName('book-item');

        for (const bookItem of bookItems) {
            const title = bookItem.querySelector('p:nth-child(1)').textContent.toLowerCase();
            const author = bookItem.querySelector('p:nth-child(2)').textContent.toLowerCase();
            const genre = bookItem.querySelector('p:nth-child(3)').textContent.toLowerCase();

            if (title.includes(query) || author.includes(query) || genre.includes(query)) {
                bookItem.style.display = 'block';
            } else {
                bookItem.style.display = 'none';
            }
        }
    }

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
    const bookListContainer = document.getElementById('book-list-container');
    bookListContainer.innerHTML = '';

    window.bookInventory.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <button class="delete-button" onclick="deleteBook(this)">Delete</button>
        `;

        bookListContainer.appendChild(bookItem);
    });
}
