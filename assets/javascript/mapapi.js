var map;
var events;
var eventName = [];
var city =[];
var lat = [];
var lng = [];
 // queryURL for Eventbrite API


function ajaxCall(){
   // var queryURL1 = "https://www.eventbriteapi.com/v3/categories/";
   var queryURL1 = "https://www.eventbriteapi.com/v3/events/search/?location.address=toronto&expand=venue&price=free";
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
    //debugger;
    console.log(data1);
    var eventObj = data1.events;
    //console.log(eventObj);

    eventObj.forEach(event => {
       eventName.push(event.name.text);
        console.log(event.name.text); 
       city.push(event.venue.address.city);
        console.log(event.venue.address.city);
        lat.push(event.venue.latitude);
        console.log(event.venue.latitude);
        lng.push(event.venue.longitude);
        console.log(event.venue.longitude);
         
        console.log("Float Lattitide is:"+parseFloat(lat),"Float Lattitide is:"+parseFloat(lng)); 
       
        //initMap(parseInt(lat),parseInt(lng));
        //initMap(parseInt(lat),parseInt(lng));
        //  initMap();
      // initMap(parseFloat(lat),parseFloat(lng));
    })
    console.log(city[0]);
    console.log(parseFloat(lat[0]));
    console.log(parseFloat(lng[0]));
    console.log(eventName[0]);
    eqfeed_callback();
    });
    
}
//var longitude = [lat, lng];
//console.log(longitude);


ajaxCall();

//function initMap(){
  //   debugger;  
//     //var place = {lat: -25.344, lng: 131.036};
//     var place = {lat: lat, lng: lng};
//   // The map, centered at Uluru
//     var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 4, center: place});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: place, map: map});

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(-25.344,131.036),
      mapTypeId: 'terrain'
     
    });
    
    // Create a <script> tag and set the USGS URL as the source.
   // var script = document.createElement('script');
    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
   // script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    //document.getElementsByTagName('head')[0].appendChild(script);
  } 

  
function eqfeed_callback() {
      debugger;
    for (var i = 0; i < eventName.length; i++) {
        //var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(lat[i],lng[i]);
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
      }
  }
 

  // Loop through the results array and place a marker for each
  // set of coordinates.
  //window.eqfeed_callback();
    
  




    // var input = document.getElementById("search");
    // var searchBox = new google.maps.places.SearchBox(input);

    // map.addListener("bounds_changed", function(){
    //     searchBox.setBounds(map.getBounds());
    // })

    //get search results on the map
    //var markers = [];

    // searchBox.addListener("places_changed", function(){
    //     var places = searchBox.getPlaces();

    //     if(places.length === 0)
    //     return;

    //     markers.forEach(function(m){
    //         m.setMap(null);
    //     });
    //     markers = [];

    //     var bounds = new google.maps.LatLngBounds();

    //     places.forEach(function(p){
    //         if(!p.geometry)
    //         return;

    //         markers.push(new google.maps.Marker({
    //             map: map,
    //             title: p.name,
    //             position: p.geometry.location
    //         }));

    //         if(p.geometry.viewport)
    //         bounds.union(p.geometry.viewport);
    //         else
    //         bounds.extend(p.geometry.location);
    //     });
    //     map.fitBounds(bounds);
   // })

//}


   

