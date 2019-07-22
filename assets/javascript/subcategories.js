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

 var getSubCategories = function(){
    $.ajax(settings2).done(function (data2) {
        console.log(data2);
        console.log(data2.subcategories[0].id);
        console.log(data2.subcategories[0].name);
        let subCategories = data2.subcategories;

        subCategories.forEach(element => {
         $("#sel-sub-category").append(`<option>${element.name}</option>`);
       });

      });
 }
 getSubCategories();