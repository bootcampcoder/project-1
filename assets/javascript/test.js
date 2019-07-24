var cat;
var subcat;
var trendingEvents;
var latitude=43.6532;
var longitutde=79.3832;

//Get user ViewPort 
function getLocation()
{
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log(latitude);
    console.log(longitutde);
  } else { 

      console.log(latitude);
      console.log(longitude);
      
  }
}

function showPosition(position) {
 latitude   = position.coords.latitude;
 longitutde =  position.coords.longitude;
 

}


function initHome()
{
  var queryURL = "https://www.eventbriteapi.com/v3/categories/";
  var settings1 = {
    "async": true,
    "crossDomain": true,
    "url": queryURL,
    "method": "GET",
    "headers": {
      "Authorization": "Bearer VNY6JP3JJDWS6LAXZSVY",
      "Content-Type": "application/json",
    },
  };

    $.ajax(settings1).done(function(data1) {
      //   console.log(data1);
         console.log(data1.categories[0].id);
      //   console.log(data1.categories[0].name);

      let categories = data1.categories;
          cat = categories;
      categories.forEach(element => {
        $("#sel-category").append(`<option class="category-items">${element.name}</option>`);

      });
       
      getSubCategories();

    });
   
  };
    


}


 
function getSubCategories(){
  var queryURL2 = "https://www.eventbriteapi.com/v3/subcategories/";
  debugger;
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
    subcat = data2;  
    
  });

}
function clearSubcat()
{
    $("#sel-sub-category").empty();
}

function useSubcat(catg)
{
    debugger;
    console.log(subcat);
    console.log(subcat.subcategories[0].id);
    console.log(subcat.subcategories[0].name);
    let subCategories = subcat.subcategories;
    let categoryID = subCategories[0].parent_category.id;
    console.log("Parent categoryId: ", categoryID);

    
        
    subCategories.forEach(element => {
      
        if (catg == element.parent_category.name) {
         
        $("#sel-sub-category").append(
          `<option class="sub-category-items">${element.name}</option>`
        );
      }
    });
}




$("#sel-category").change(function() {
debugger;
  selCategory = $(this)
    .children("option:selected")
    .val();
  useSubcat(selCategory);
  //clearSubcat();
});



var getCategories = function() {
  var queryURL1 = "https://www.eventbriteapi.com/v3/categories/";
  var settings1 = {
    "async": true,
    "crossDomain": true,
    "url": queryURL1,
    "method": "GET",
    "headers": {
      "Authorization": "Bearer VNY6JP3JJDWS6LAXZSVY",
      "Content-Type": "application/json",
    },
  };

    $.ajax(settings1).done(function(data1) {
      //   console.log(data1);
         console.log(data1.categories[0].id);
      //   console.log(data1.categories[0].name);

      let categories = data1.categories;
          cat = categories;
      categories.forEach(element => {
        $("#sel-category").append(`<option class="category-items">${element.name}</option>`);

      });
       
      getSubCategories();

    });
   
  };
 


getCategories();