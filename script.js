// Function to generate a random word from the movie array
function generateWord() {
    if (movie.length === 0) {
      alert('Movie array is empty. Please load movie data first.');
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * movie.length);
    const randomWord = movie[randomIndex];
    document.getElementById('wordPlaceholder').textContent = randomWord;
  }
  
  // Event listener for the "Generate Word" button
  document.getElementById('generateButton').addEventListener('click', generateWord);
  
  // Read the CSV file and store the data in the "movie" array
  function readCSVFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const csv = event.target.result;
        const lines = csv.split('\n');
        const movies = [];
        for (let i = 0; i < lines.length; i++) {
          const movieData = lines[i].trim();
          movies.push(movieData);
        }
        resolve(movies);
      };
      reader.onerror = (event) => {
        reject(event.target.error);
      };
      reader.readAsText(file);
    });
  }
  
  // Event listener for loading the CSV file
  window.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.csv';
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      readCSVFile(file)
        .then((movies) => {
          window.movie = movies;
          console.log('Movie data loaded:', movie);
        })
        .catch((error) => {
          console.error('Error reading CSV file:', error);
        });
    });
    fileInput.click();
  });
  