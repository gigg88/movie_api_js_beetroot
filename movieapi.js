const APIKEY = '11edea07';
const movieDataList = document.getElementById("movieDataList");
const movieContainer = document.getElementById("movie_container");
const movieBox = document.getElementById("movie_box");
const title = document.getElementById("title");


movieDataList.addEventListener("change", () => {
    const movie = movieDataList.value;

    if(movie) {
        const apiUrl = `http://www.omdbapi.com/?t=${movie}&apikey=${APIKEY}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movieTitle = data.Title;
            const moviePoster = data.Poster;

            movieBox.innerHTML = `
               <p id="title">${movieTitle}</p>
               <img src="${moviePoster}" alt="">
                        
            `;
        })
        .catch(error => {
            movieBox.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    }
});

// http://www.omdbapi.com/?i=tt3896198&apikey=11edea07