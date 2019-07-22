//call the EVENTBRITE API FOR  
var searchCat = "";
var searchSubCat="";
//Get Categries 
var queryURL1 = "https://www.eventbriteapi.com/v3/categories/"

var settings1 = {
    "async": true,
    "crossDomain": true,
    "url": queryURL1,
    "method": "GET",
    "headers": {
      "Authorization": "Bearer VNY6JP3JJDWS6LAXZSVY",
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

  var queryURL3 = "https://www.eventbriteapi.com/v3/events/search?start_date.keyword=this_month? ";
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

