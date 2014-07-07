//Initialize gMap

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(43.7182712, -79.3777061),
    zoom: 12
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);