//Initialize gMap and route setter
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    center: new google.maps.LatLng(41.8337329,-87.7321554),
    zoom: 5
  };
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);
//On click submit, send info to Gmaps API and set route with response
  $('#submit-button').click(function(ev){
    $('#submit-button').val('Calculating Route...').attr('disabled', 'disabled');
    var startAddress = $('#start-pt').val();
    var finalDest = $('#start-pt').val();
    var inputValues = $('.address-input').not('#start-pt')
    var destAddresses = []
    for (var i=0; i<inputValues.length; i++){
      destAddresses.push({
        location: $(inputValues[i]).val(),
        stopover: true
      });
    };
    var request = {
      origin: startAddress,
      destination: finalDest,
      waypoints: destAddresses,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status){
      console.log(response);
      console.log(status);
      if (status == google.maps.DirectionsStatus.OK){
        directionsDisplay.setDirections(response);
      };
      //Disable Submit button while route is calc'd
      $('#submit-button').val('Submit').removeAttr('disabled');
      //Add link to start again
      $('<a href="">//Again</a>')
        .css({color:'red'})
        .appendTo('#forms');
      $("input[type='a']").click(function(ev){
        ev.preventDefault;
        $(window).reload();
      })
    });
  });
};
google.maps.event.addDomListener(window, 'load', initialize);

//Add destination input

$( 'document' ).ready(function(){
  $('#add-btn').click(function(){
    var destInputs = $('.address-input').not("#submit-button, #del-btn, #add-btn");
    var clonedInput = $('#end-pt').clone().removeAttr("id").val('');
    if (destInputs.length < 10){
      $('#input-container').append(clonedInput);
    };
  });

  //Delete destination input
  $('#del-btn').click(function(){
    var destInputs = $('.address-input').not("#submit-button, #del-btn, #add-btn");
    if (destInputs.length > 2){
      destInputs.last().remove();
    };
  });
});

