var map;
var events;
var eventName = [];
var city =[];
var lat = [];
var lng = [];
 // queryURL for Eventbrite API


function ajaxCall(){
   // var queryURL1 = "https://www.eventbriteapi.com/v3/categories/";
   var queryURL1 = "https://www.eventbriteapi.com/v3/events/search/?location.address=toronto&location.within=10km&expand=venue&price=free";
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
        city.push(event.venue.address.city);
        lat.push(event.venue.latitude);
        lng.push(event.venue.longitude);

        
        
    })
    console.log(city[0]);
    console.log(lat[0]);
    console.log(lng[0]);
    console.log(eventName[0]);
    });
    
}
//var longitude = [lat, lng];
//console.log(longitude);

ajaxCall();

function initMap(){
    var options = {
        center: {lat:43.653226 , lng: -79.383},
       // center:longitude,
        zoom: 10
    };

    map = new google.maps.Map(document.getElementById("map"), options);

    var currentLocation = new google.maps.Marker({
        position: options.center,
        map: map
    })

    var input = document.getElementById("search");
    var searchBox = new google.maps.places.SearchBox(input);

    map.addListener("bounds_changed", function(){
        searchBox.setBounds(map.getBounds());
    })

    //get search results on the map
    var markers = [];

    searchBox.addListener("places_changed", function(){
        var places = searchBox.getPlaces();

        if(places.length === 0)
        return;

        markers.forEach(function(m){
            m.setMap(null);
        });
        markers = [];

        var bounds = new google.maps.LatLngBounds();

        places.forEach(function(p){
            if(!p.geometry)
            return;

            markers.push(new google.maps.Marker({
                map: map,
                title: p.name,
                position: p.geometry.location
            }));

            if(p.geometry.viewport)
            bounds.union(p.geometry.viewport);
            else
            bounds.extend(p.geometry.location);
        });
        map.fitBounds(bounds);
    })

}


   

