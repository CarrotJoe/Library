document.addEventListener('DOMContentLoaded', () => {
    fetch('/books/fetch')
      .then(response => response.json())
      .then(books => {
        const tableBody = document.getElementById('bookTableBody');
        tableBody.innerHTML = ''; // Clear any existing rows
  
        books.forEach(book => {
          const row = document.createElement('tr');
  
          row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.genre}</td>
            <td>${book.owner}</td>
          `;
  
          tableBody.appendChild(row);
        });
      })
      .catch(err => console.error('Fetch error:', err));
  });
  