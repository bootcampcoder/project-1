var latitude=0;
var longitutde=0;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log(latitude);
    console.log(longitutde);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
 latitude   = position.coords.latitude;
 longitutde =  position.coords.longitude;
 

}
