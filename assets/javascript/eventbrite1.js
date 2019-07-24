 // Your web app's Firebase configuration
 var token;
 var firebaseConfig=[];
 var database;
 var searchCat = "";
var searchSubCat="";
 var catArray;
// Database Connection Function
 function dbConnnection(){
     debugger;
    firebaseConfig = {
        apiKey: "AIzaSyDrlk0Nc7-wku0n93mKDtT5-WiFn4g2XeY",
        authDomain: "events-hunter-be525.firebaseapp.com",
        databaseURL: "https://events-hunter-be525.firebaseio.com",
        projectId: "events-hunter-be525",
        storageBucket: "",
        messagingSenderId: "104676418013",
        appId: "1:104676418013:web:629e23df93de9d59",
        
      };
// Initialize Firebase
      
    }


//call the EVENTBRITE API FOR  
function getCategories()
{
// //Get Categries 
// firebase.initializeApp(firebaseConfig);
// database = firebase.database()
//  database.ref().function(childSnapshot) 
//  {
//   debugger; 
//  console.log(childSnapshot.val());

//  token = childSnapshot.val();
//  console.log("the token is:"+token);
// };


var queryURL1 = "https://www.eventbriteapi.com/v3/categories/";
debugger;
var settings1 = {
    
    "async": true,
    "crossDomain": true,
    "url": queryURL1,
    "method": "GET",
   // "success": getSubcategories(),
    "headers": {
        "Authorization":"Bearer VNY6JP3JJDWS6LAXZSVY",
      "Content-Type": "application/json"
    }
  }

  

  $.ajax(settings1).done((function (data1) {
      debugger;
    console.log(data1);
    console.log(data1.categories[0].id);
    console.log(data1.categories[0].name);
    getSubcategories(data1);

    
  }));    

}
// get subcategories

function getSubcategories(result){           
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
    var id = data2.subcategories;
    data2.subcategories.forEach(element => {
          debugger;
        if(result.categories[0].id == element.parent_category.id )
        {
            console.log(id.id);
        }
    });
    
    
  });    
}

    
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
// $.when(dbConnnection()).success(function(){
//     getCategories()
  
// });
// $.when(getCategories()).done(function(){
    
//     getSubcategories()
    
// });
//dbConnnection();
 getCategories();
// getSubcategories();
//getToken();

// getLocation();

 