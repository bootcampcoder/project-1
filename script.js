
var map;
var events;
var eventName = [];
var eventIndex = 0;
var city = [];
var lat = [];
var lng = [];
var location;

// queryURL for Eventbrite API
function ajaxCall() {
  //debugger;
  var queryURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=toronto&expand=venue&price=freehttps://www.eventbriteapi.com/v3/events/search/?location.address=toronto&location.within=10km&expand=venue&price=free&token=VNY6JP3JJDWS6LAXZSVY";
  var settings = {
    async: true,
    crossDomain: true,
    url: queryURL,
    method: "GET",
  };
  $.ajax(settings).done(function (data) {
    var eventObj = data.events;

    eventObj.forEach(event => {

      eventName.push(event.name.text);
      city.push(event.venue.address.city);
      lat.push(event.venue.latitude);
      lng.push(event.venue.longitude);
    })
    console.log(city[0]);
    console.log(parseFloat(lat[0]));
    console.log(parseFloat(lng[0]));
    console.log(eventName[0]);
    //eqfeed_callback();
  });

}
ajaxCall();

//  function initMap() {
//    map = new google.maps.Map(document.getElementById('map'), {
//      zoom: 12,
//      center: new google.maps.LatLng(43.6532,-79.3832),
//      mapTypeId: 'terrain'

//    });

//  } 

function initialize() {
  var toronto = { lat: 43.6532, lng: -79.3832 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: toronto
  });

  // This event listener calls createMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function (event) {
    createMarker(event.latLng, map);
  });
  // Add a marker at the center of the map.
  createMarker(toronto, map);

}




function createMarker(latLng, map) {
  for (var i = 0; i < eventName.length; i++) {
    var latLng = new google.maps.LatLng(lat[i], lng[i]);

    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });

   

  }
  var infoWindow = new google.maps.InfoWindow({
    content: `${eventName[eventIndex++ % eventName.length]}`
  });

  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);


//  function eqfeed_callback() {
//       // debugger;
//      for (var i = 0; i < eventName.length; i++) {
//          //var coords = results.features[i].geometry.coordinates;
//          var latLng = new google.maps.LatLng(lat[i],lng[i]);

//          var marker = new google.maps.Marker({
//            position: latLng,
//            map: map
//          });

//          var infoWindow = new google.maps.InfoWindow({
//             content:eventName[eventIndex++ % eventName.length] 
//          });

//          marker.addListener('click', function(position) {
//             infoWindow.open(position, marker);
//           });

//        }  

//  }



