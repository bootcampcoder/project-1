var map;
var events;
var eventName = [];
var city = [];
var lat = [];
var lng = [];
var location;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: new google.maps.LatLng(43.6532, -79.3832),
    mapTypeId: "terrain",
  });
}

// queryURL for Eventbrite API
function ajaxCall() {
  var searchstring = "toronto";
  var queryURL = `https://www.eventbriteapi.com/v3/events/search/?location.address=${searchstring}&expand=venue&price=freehttps://www.eventbriteapi.com/v3/events/search/?location.address=toronto&location.within=10km&expand=venue&price=free&token=VNY6JP3JJDWS6LAXZSVY`;
  var settings = {
    async: true,
    crossDomain: true,
    url: queryURL,
    method: "GET",
  };
  $.ajax(settings).done(function(data) {
    var eventObj = data.events;
    eventObj.forEach(event => {
      eventName.push(event.name.text);
      city.push(event.venue.address.city);
      lat.push(event.venue.latitude);
      lng.push(event.venue.longitude);
    });

    for (var i = 0; i < 25; i++) {

        $(".collapsible-search").append(`<li>
        <div class="collapsible-header">${eventObj[i].name.text}</div>
        <div class="collapsible-body">
          <span>Starts on: ${moment(eventObj[i].start.local).format(
            "YYYY-MM-DD HH:mm:ss"
          )}</span><br />
          <span>Ends on: ${moment(eventObj[i].end.local).format(
            "YYYY-MM-DD HH:mm:ss"
          )}</span><br />
          <span
            ><a href="${eventObj[i].url}"><img
            src=""
            alt=""
            width="70%"
        /></a></span>
        </div>
      </li>`);

    }
    eqfeed_callback();
  });
}
ajaxCall();

function eqfeed_callback() {
  // debugger;
  for (var i = 0; i < eventName.length; i++) {
    //var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(lat[i], lng[i]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: eventName[i],
    });

    var infowindow = new google.maps.InfoWindow();

    var content = `<h4>${eventName[i]}</h4>`;
    google.maps.event.addListener(
      marker,
      "click",
      (function(marker, content, infowindow) {
        return function() {
          infowindow.setContent(content);
          infowindow.open(map, marker);
        };
      })(marker, content, infowindow)
    );
  }
}
$(".search-btn").on("click", (e)=>{
  e.preventDefault();
  window.location.href='https://bootcampcoder.github.io/project-1/searchResult.html';
});
