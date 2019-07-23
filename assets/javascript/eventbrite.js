 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDrlk0Nc7-wku0n93mKDtT5-WiFn4g2XeY",
    authDomain: "events-hunter-be525.firebaseapp.com",
    databaseURL: "https://events-hunter-be525.firebaseio.com",
    projectId: "events-hunter-be525",
    storageBucket: "",
    messagingSenderId: "104676418013",
    appId: "1:104676418013:web:629e23df93de9d59"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var database = firebase.database();
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());


  });



//call the EVENTBRITE API FOR  
var searchCat = "";
var searchSubCat="";
//Get Categries 

var queryURL1 = "https://www.eventbriteapi.com/v3/categories/";
var settings1 = {
    "async": true,
    "crossDomain": true,
    "url": queryURL1,
    "method": "GET",
    "headers": {
      "Authorization": "",
      "Content-Type": "application/json"
    }
  }

  $.ajax(settings1).done(function (data1) {
    console.log(data1);
    console.log(data1.categories[0].id);
    console.log(data1.categories[0].name);

    
  });    

// get subcategories

           
var queryURL2 = "https://www.eventbriteapi.com/v3/subcategories/"

var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": queryURL2,
    "method": "GET",
    "headers": {
      "Authorization": "Bearer VNY6JP3JJDWS6LAXZSVY",
      "Content-Type": "application/json"
    }
  }

  $.ajax(settings2).done(function (data2) {
    console.log(data2);
    console.log(data2.subcategories[0].id);
    console.log(data2.subcategories[0].name);
    
  });    

  //Monthly Event Search
  /*
  var queryURL3 = "https://www.eventbriteapi.com/v3/events/search?start_date.keyword=this_week";
  var settings3 = {
    "async": true,
    "crossDomain": true,
    "url": queryURL3,
    "method": "GET",
    "headers": {
      "Authorization": "Bearer VNY6JP3JJDWS6LAXZSVY",
      "Content-Type": "application/json"

  }
}
    
  $.ajax(settings3).done(function (data3) {
    console.log(data3);
    
  });    

  //complexed Query

*/



 