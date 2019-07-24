var cat;

var getSubCategories = function(catg) {
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
    console.log(data2);
    console.log(data2.subcategories[0].id);
    console.log(data2.subcategories[0].name);
    let subCategories = data2.subcategories;
    let categoryID = subCategories[0].parent_category.id;
    console.log("Parent categoryId: ", categoryID);


    subCategories.forEach(element => {
      //ßdebugger;
      //console.log($(this).val());
      console.log(element.name);
      if (catg == element.parent_category.id) {
        $("#sel-sub-category").append(
          `<option class="sub-category-items">${element.name}</option>`
        );
      }
    });
  });
};

$("#sel-category").change(function() {
  debugger;
  selCategory = $(this)
    .children("option:selected")
    .val();
  getSubCategories(selCategory);
});

getCategories();
getSubCategories();
