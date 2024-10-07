const APIKEY = '11edea07';
const movieDataList = document.getElementById("movieDataList");
const movieContainer = document.getElementById("movie_container");
const movieBox = document.getElementById("movie_box");
const title = document.getElementById("title");


movieDataList.addEventListener("change", () => {
    const movie = movieDataList.value;

    if(movie) {
        const apiUrl = `http://www.omdbapi.com/?t=${title}&appid=${APIKEY}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movieTitle = data.title;

            movieBox.innerHTML = `
               <p id="title">${title}</p>
                        
            `;
        })
        .catch(error => {
            movieBox.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    }
});

// http://www.omdbapi.com/?t=${title}&appid=${APIKEY}