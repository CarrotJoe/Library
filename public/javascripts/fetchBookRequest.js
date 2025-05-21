document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/books/fetch');
    const books = await res.json();
    
    const tbody = document.getElementById('bookTableBody');
    tbody.innerHTML = '';

    books.forEach(book => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.genres.join(', ')}</td>
        <td>${book.isbn}</td>
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


  } catch (err) {
    console.error('Error loading books:', err);
  }
});

async function toggleCheckout(button) {
  const id = button.getAttribute('data-id');

  try {
    const res = await fetch(`/books/${id}/toggle-checkout`, {
      method: 'PATCH'
    });

    const data = await res.json();
    if (res.ok) {
      button.textContent = data.checkedOut ? 'Checked Out' : 'Available';
      button.classList.toggle('btn-danger', data.checkedOut);
      button.classList.toggle('btn-success', !data.checkedOut);
    } else {
      alert(data.error || 'Failed to update status');
    }
  } catch (err) {
    console.error('Error toggling checkout:', err);
    alert('Something went wrong.');
  }
}
