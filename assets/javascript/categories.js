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

var getCategories = function() {
  $.ajax(settings1).done(function(data1) {
    //   console.log(data1);
    //   console.log(data1.categories[0].id);
    //   console.log(data1.categories[0].name);

    let categories = data1.categories;

    categories.forEach(element => {
      $("#sel-category").append(`<option>${element.name}</option>`);
    });
  });
};

getCategories();
