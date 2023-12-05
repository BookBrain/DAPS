document.addEventListener('DOMContentLoaded', function () {
    const addBookForm = document.getElementById('add-book-form');
    addBookForm.addEventListener('submit', handleAddBookForm);

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

function showBookDetails(index) {
    const selectedBook = window.bookInventory[index];
    const detailsContainer = document.getElementById('book-details-container');

    detailsContainer.innerHTML = `
        <h2>${selectedBook.title}</h2>
        <p><strong>Author:</strong> ${selectedBook.author}</p>
        <p><strong>Genre:</strong> ${selectedBook.genre}</p>
        <p><strong>Language:</strong> ${selectedBook.language}</p>
        <p><strong>Description:</strong> ${selectedBook.description}</p>
    `;
}

function handleSearchForm(event) {
    event.preventDefault();

    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim().toLowerCase();

    searchBooks(query);
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleSearchForm);

function searchBooks(query) {
    const searchResults = window.bookInventory.filter(book => {
        const lowerCaseQuery = query.toLowerCase();
        return book.title.toLowerCase().includes(lowerCaseQuery);
    });

    displaySearchResults(searchResults);
}

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results-container');
    searchResultsContainer.innerHTML = '';

    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(book => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result');
            resultItem.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;

            searchResultsContainer.appendChild(resultItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const showProfileBtn = document.getElementById('show-profile-btn');
    const closeProfileBtn = document.getElementById('close-profile-btn');
    const userProfilePopup = document.getElementById('user-profile');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    showProfileBtn.addEventListener('click', function () {
        userProfilePopup.style.display = 'block';
        overlay.style.display = 'flex';
        document.body.appendChild(overlay);
    });

    closeProfileBtn.addEventListener('click', function () {
        userProfilePopup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
    });



    overlay.addEventListener('click', function () {
        userProfilePopup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
    });
});


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
