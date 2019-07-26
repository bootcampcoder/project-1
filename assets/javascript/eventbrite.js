// Firebase configuration
var token;
var firebaseConfig = [];
var database;
var searchCat = "";
var searchSubCat = "";
var catArray;
// Database Connection Function
function dbConnnection() {
  firebaseConfig = {
    apiKey: "AIzaSyDrlk0Nc7-wku0n93mKDtT5-WiFn4g2XeY",
    authDomain: "events-hunter-be525.firebaseapp.com",
    databaseURL: "https://events-hunter-be525.firebaseio.com",
    projectId: "events-hunter-be525",
    storageBucket: "",
    messagingSenderId: "104676418013",
    appId: "1:104676418013:web:629e23df93de9d59",
  };
}

//call the EVENTBRITE API FOR
function getCategories() {
  var queryURL1 = "https://www.eventbriteapi.com/v3/categories/";
  var settings1 = {
    async: true,
    crossDomain: true,
    url: queryURL1,
    method: "GET",
    headers: {
      Authorization: "Bearer VNY6JP3JJDWS6LAXZSVY",
      "Content-Type": "application/json",
    },
  };

  $.ajax(settings1).done(function(data1) {
    getSubcategories(data1);
  });
}
// get subcategories

function getSubcategories(result) {
  var queryURL2 = "https://www.eventbriteapi.com/v3/subcategories/";

  var settings2 = {
    async: true,
    crossDomain: true,
    url: queryURL2,
    method: "GET",
    headers: {
      Authorization: "Bearer VNY6JP3JJDWS6LAXZSVY",
      "Content-Type": "application/json",
    },
  };

  $.ajax(settings2).done(function(data2) {
    var id = data2.subcategories;
    data2.subcategories.forEach(element => {
      if (result.categories[0].id == element.parent_category.id) {

      }
    });
  });
}

getCategories();
