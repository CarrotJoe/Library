document.getElementById('addBookForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // prevent full page reload
  
    const formData = {
      name: this.name.value,
      genre: this.genre.value,
      owner: this.owner.value
    };
  
    try {
      const response = await fetch('/books/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        location.reload(true);
        // Close modal, reset form, update UI, etc.
      } else {
        alert('Failed to add book');
      }
    } catch (err) {
      console.error(err);
    }
  });