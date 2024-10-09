"use strict";

var APIKEY = '11edea07';
var movieDataList = document.getElementById("movieDataList");
var movieContainer = document.getElementById("movie_container");
var movieBox = document.getElementById("movie_box");
var title = document.getElementById("title");
movieDataList.addEventListener("change", function () {
  var movie = movieDataList.value;

  if (movie) {
    var apiUrl = "http://www.omdbapi.com/?t=".concat(movie, "&apikey=").concat(APIKEY);
    fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (data) {
      var movieTitle = data.Title;
      var moviePoster = data.Poster;
      movieBox.innerHTML = "\n               <p id=\"title\">".concat(movieTitle, "</p>\n               <img src=\"").concat(moviePoster, "\" alt=\"\">\n                        \n            ");
    })["catch"](function (error) {
      movieBox.innerHTML = "<p>Error: ".concat(error.message, "</p>");
    });
  }
}); // http://www.omdbapi.com/?i=tt3896198&apikey=11edea07