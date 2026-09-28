fetch('nav.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load nav: ${response.status}`);
      }
      return response.text();
    })
    .then(navHTML => {
      document.getElementById('navbar-placeholder').innerHTML = navHTML;
    })
    .catch(error => {
      console.error('Error loading navigation:', error);
    });