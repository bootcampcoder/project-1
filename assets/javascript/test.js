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
function initCategory(){

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
       
     

    });

}

function initEvents()
{
 // var queryURL = "https://www.eventbriteapi.com/v3/events/search?location.longitude="+longitutde+"&location.latitude="+latitude+"&price=free";
  var queryURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=Toronto&location.within=20km&expand=venue&price=free&token=VNY6JP3JJDWS6LAXZSVY";
  var settings1 = {
    "async": true,
    "crossDomain": true,
    "url": queryURL,
    "method": "GET",
    // headers: {
    //    "Authorization": "Bearer VNY6JP3JJDWS6LAXZSVY",
    //    "Content-Type": "application/json",
    //  },
  };

    $.ajax(settings1).done(function(data) {
        console.log(data);
       //  console.log(data.categories[0].id);
      //   console.log(data1.categories[0].name);

         console.log(data.events[0].url);
                     // data.events[i].logo.original.url

      for(var i=0;i<4;i++)
      {
         var desc = data.events[i].description.text;
         desc = desc.substring(0,50);
         console.log(desc);
         var title =data.events[i].name.text;
         title=title.substring(0,15);
         console.log(title);

        $("#events-4").append(`<div class="col s12 m7" id="Result${i}">
        <a  id="result${i}-link" href=${data.events[i].url} rel="noopener noreferrer">
        <div id="result${i}-card" class="card">
          <div class="card-image">
            <img height="150px" src=${ data.events[i].logo.original.url}>
            <span class="card-title">${title}</span>
          </div>
          <div class="card-content">
            <p> ${desc}</p>
          </div>
          <div class="card-action">
            <a href=${data.events[i].url}>Find Tickets Here</a>
          </div>
        </div>
      </a>
      </div>`);

      }

      


      
    });
   
  };
    





 
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
         

function getSubCategories(catg){
  var queryURL2 = "https://www.eventbriteapi.com/v3/subcategories/?token=VNY6JP3JJDWS6LAXZSVY";

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(data2) {
    console.log(data2);
    console.log(data2.subcategories[0].id);
    console.log(data2.subcategories[0].name);
    let subCategories = data2.subcategories;
    let categoryID = subCategories[0].parent_category.id;
    console.log("Parent categoryId: ", categoryID);


    subCategories.forEach(element => {
      if (catg == element.parent_category.id) {

        $("#sel-sub-category").append(
          `<option class="sub-category-items">${element.name}</option>`
        );
      }
    });

}

  });




  // var settings2 = {
  //   async: true,
  //   crossDomain: true,
  //   url: queryURL2,
  //   method: "GET",
  //   headers: {
  //     Authorization: "Bearer VNY6JP3JJDWS6LAXZSVY",
  //     "Content-Type": "application/json",
  //   },
  // };
  // $.ajax(settings2).then(function(data2) {
  //   console.log(data2);
  //   console.log(data2.subcategories[0].id);
  //   console.log(data2.subcategories[0].name);
  //   let subCategories = data2.subcategories;
  //   let categoryID = subCategories[0].parent_category.id;
  //   console.log("Parent categoryId: ", categoryID);
  //   //console.log("categoryId: ", cat[0].id);
  //   // for(var i = 0; i < subCategories.length ; i++){
  //   //   console.log(subCategories[i].parent_category.id)

  //   //   // $(".category-items").on("click", function(){
  //   //   //   console.log(subCategories[i].name)
  //   //   //   if(cat[i].id == subCategories[i].parent_category.id){
  //   //   //     $("#sel-sub-category").append(
  //   //   //       `<option class="sub-category-items">${subCategories[i].name}</option>`
  //   //   //     );
  //   //   //   }
  //   //   // })
  //   // }

  //   subCategories.forEach(element => {

  //     //console.log($(this).val());
  //     console.log(element.name);
  //     if (catg == element.parent_category.id) {
  //       $("#sel-sub-category").append(
  //         `<option class="sub-category-items">${element.name}</option>`
  //       );
  //     }
  //   });
  // });
};


$("#sel-category").change(function() {
debugger;
  selCategory = $(this)
    .children("option:selected")
    .val();

  useSubcat(selCategory);
  //clearSubcat();
 getSubCategories(selCategory);
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
   $.ajax(settings1).then(function(data1) {

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
 

//getLocation();
initEvents();
getCategories();


    });
  };
  var selCategory ="";


getCategories();
getSubCategories();

