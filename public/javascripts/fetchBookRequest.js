document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/books/fetch');
    const books = await res.json();
    
    const tbody = document.getElementById('bookTableBody');
    tbody.innerHTML = '';

    books.forEach(book => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="book-title">${book.name}</td>
        <td class="book-author">${book.author}</td>
        <td>${book.genres.join(', ')}</td>
        <td class="book-isbn">${book.isbn}</td>
        <td>${book.owner}</td>

        <td>
          <button class="btn btn-sm ${book.checkedOut ? 'btn-danger' : 'btn-success'}"
                  data-id="${book._id}"
                  onclick="toggleCheckout(this)">
            ${book.checkedOut ? 'Checked Out' : 'Available'}
          </button>
        </td>
      `;
      tbody.appendChild(row);
    });

    // 🔥 Fire custom event AFTER DOM is updated
    document.dispatchEvent(new Event('booksLoaded'));

  } catch (err) {
    console.error('Error loading books:', err);
  }
});
