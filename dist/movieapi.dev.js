"use strict";

var APIKEY = '11edea07';
var movieDataList = document.getElementById("movieDataList");
var movieContainer = document.getElementById("movie_container");
var movieBox = document.getElementById("movie_box");
var title = document.getElementById("title");
movieDataList.addEventListener("change", function () {
  var movie = movieDataList.value;

  if (movie) {
    var apiUrl = "http://www.omdbapi.com/?t=".concat(title, "&appid=").concat(APIKEY);
    fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (data) {
      var movieTitle = data.title;
      movieBox.innerHTML = "\n               <p id=\"title\">".concat(title, "</p>\n                        \n            ");
    })["catch"](function (error) {
      movieBox.innerHTML = "<p>Error: ".concat(error.message, "</p>");
    });
  }
}); // http://www.omdbapi.com/?t=${title}&appid=${APIKEY}