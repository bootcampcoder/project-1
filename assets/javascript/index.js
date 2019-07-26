var cat;
var subcat;
var trendingEvents;
var latitude = 43.6532;
var longitutde = 79.3832;

//Get user ViewPort
function getLocation() {
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
  latitude = position.coords.latitude;
  longitutde = position.coords.longitude;
}
function initCategory() {
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
    //   console.log(data1);
    console.log(data1.categories[0].id);
    //   console.log(data1.categories[0].name);

    let categories = data1.categories;
    cat = categories;
    categories.forEach(element => {
      $("#sel-category").append(
        `<option class="category-items">${element.name}</option>`
      );
    });
  });
}

function initEvents() {
  var queryURL =
    "https://www.eventbriteapi.com/v3/events/search/?location.address=Toronto&location.within=20km&expand=venue&price=free&token=VNY6JP3JJDWS6LAXZSVY";
  var settings1 = {
    async: true,
    crossDomain: true,
    url: queryURL,
    method: "GET",
  };

  $.ajax(settings1).done(function(data) {
    for (var i = 0; i < 4; i++) {
      var desc = data.events[i].description.text;
      desc = desc.substring(0, 35);
      var title = data.events[i].name.text;
      title = title.substring(0, 7);

      $("#events-4").append(`<div class="col s12 m7" id="Result${i}">
        <a  id="result${i}-link" href=${
        data.events[i].url
      } rel="noopener noreferrer">
        <div id="result${i}-card" class="card">
          <div class="card-image">
            <img height="150px" src=${data.events[i].logo.original.url}>
            <p class="h6 card-title">${title}</p>
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
}

function getSubCategories() {
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
    subcat = data2;
  });
}
function clearSubcat() {
  $("#sel-sub-category").empty();
}

function useSubcat(catg) {
  let subCategories = subcat.subcategories;
  let categoryID = subCategories[0].parent_category.id;

  subCategories.forEach(element => {
    if (catg == element.parent_category.name) {
      $("#sel-sub-category").append(
        `<option class="sub-category-items">${element.name}</option>`
      );
    }
  });
}

$("#sel-category").change(function() {
  selCategory = $(this)
    .children("option:selected")
    .val();
  useSubcat(selCategory);
  //clearSubcat();
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

  $.ajax(settings1).done(function(data1) {
    let categories = data1.categories;
    cat = categories;
    categories.forEach(element => {
      $("#sel-category").append(
        `<option class="category-items">${element.name}</option>`
      );
    });

    getSubCategories();
  });
};

initEvents();
getCategories();
