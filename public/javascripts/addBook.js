document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addBookForm');
  if (!form) {
    console.warn('addBookForm not found in DOM');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isbn = document.getElementById('isbn')?.value.trim();
    const genre1 = document.getElementById('genre1')?.value;
    const genre2 = document.getElementById('genre2')?.value;
    const owner = document.getElementById('owner')?.value.trim();

    let genres = [];
      if (genre1) genres.push(genre1);
      if (genre2 && genre2 !== genre1) genres.push(genre2); // avoid duplicates

    console.log({ isbn, genre1, owner });
    console.log('Saving book with genres:', genres);


    if (!isbn) {
      alert('ISBN is required');
      return;
    }


    if (!genre1 || !genres.length) {
      alert('At least one genre is required');
      return;
    }


    if (!owner) {
      alert('Please enter who owns the book');
      return;
    }

    try {
      const res = await fetch('/books/add-by-isbn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isbn, owner, genres })

      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Error: ${data.error || 'Failed to add book'}`);
        return;
      }

      alert('Book added successfully!');
      location.reload();

    } catch (err) {
      console.error(err);
      alert('An error occurred. Check console.');
    }
  });
});
