document.addEventListener('booksLoaded', () => {
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
      const title = row.querySelector('.book-title')?.textContent.toLowerCase() || '';
      const author = row.querySelector('.book-author')?.textContent.toLowerCase() || '';
      const isbn = row.querySelector('.book-isbn')?.textContent.toLowerCase() || '';

      row.style.display = (
        title.includes(searchText) ||
        author.includes(searchText) ||
        isbn.includes(searchText)
      ) ? '' : 'none';
    });
  });
});
