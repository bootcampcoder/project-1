// var queryURL = "https://www.eventbriteapi.com/v3/events/search/?q=music&token=VNY6JP3JJDWS6LAXZSVY";

var queryURL = "https://www.eventbriteapi.com/v3/events/search/?q=toronto+free"

var settings = {
  async: true,
  crossDomain: true,
  url: queryURL,
  method: "GET",
  headers: {
    Authorization: "Bearer VNY6JP3JJDWS6LAXZSVY",
    "Content-Type": "application/json",
  },
};


  $.ajax(settings).done(function(data) {
       console.log("Response: "+data);
       console.log("Name: ",data.events[0].start.local);
       console.log("Name: ",data.events[0].end.local);




    // categories.forEach(element => {
    //   $("#sel-category").append(`<option>${element.name}</option>`);
    // });
  });