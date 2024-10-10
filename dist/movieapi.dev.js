"use strict";

var APIKEY = '11edea07';
var movieDataList = document.getElementById("movieDataList");
var movieContainer = document.getElementById("movie_container");
var movieBox = document.getElementById("movie_box");
var title = document.getElementById("title");
movieDataList.addEventListener("click", function () {
  var movie = movieDataList.value;

  if (movie) {
    var apiUrl = "https://www.omdbapi.com/?t=".concat(movie, "&apikey=").concat(APIKEY);
    fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (data) {
      var movieTitle = data.Title;
      var moviePoster = data.Poster;
      var release_date = data.Year;
      var overview = data.Plot;
      movieBox.innerHTML = "\n            <h2 id=\"title\">".concat(movieTitle, "</h2>\n            <p id=\"release-date\">").concat(release_date, "</p>\n            <p id=\"overview\">").concat(overview, "</p>  \n            <img src=\"").concat(moviePoster, "\" alt=\"\">\n          ");
      movieBox.classList.add('active');
    })["catch"](function (error) {
      movieBox.innerHTML = "<p>Error: ".concat(error.message, "</p>");
    });
  } else {
    movieBox.classList.remove('active');
  }
});