const APIKEY = '11edea07';
const movieDataList = document.getElementById("movieDataList");
const movieBox = document.getElementById("movie_box"); // Removed unused elements

movieDataList.addEventListener("change", () => { // Using "change" for user experience
  const movie = movieDataList.value;

  if (movie) {
    const apiUrl = `https://www.omdbapi.com/?t=${movie}&apikey=${APIKEY}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const movieTitle = data.Title;
        const moviePoster = data.Poster;
        const release_date = data.Year;
        const overview = data.Plot;

        movieBox.innerHTML = `
          <h2 id="title">${movieTitle}</h2>
          <p id="release-date">${release_date}</p>
          <p id="overview">${overview}</p>  
          <img src="${moviePoster}" alt="">
        `;

        movieBox.classList.add('active');
      })
      .catch(error => {
        movieBox.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  } else {
    // Clear movie information when search is empty
    movieBox.innerHTML = '';
    movieBox.classList.remove('active'); // Ensure styles are removed
  }
});



