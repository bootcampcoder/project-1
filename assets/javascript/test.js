var cat;
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
  getSubCategories(selCategory);
});



var getCategories = function() {
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

    $.ajax(settings1).then(function(data1) {
      //   console.log(data1);
         console.log(data1.categories[0].id);
      //   console.log(data1.categories[0].name);

      let categories = data1.categories;
          cat = categories;
      categories.forEach(element => {
        $("#sel-category").append(`<option class="category-items">${element.name}</option>`);

      });

    });
  };
  var selCategory ="";


getCategories();
getSubCategories();
