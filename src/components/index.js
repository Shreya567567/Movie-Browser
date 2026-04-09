fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e95418b7')
  .then(response => response.text()) // Converts response body to a string
  .then(textData => {
    console.log(textData); // This is your data in text form
  })
  .catch(error => console.error('Error:', error));
