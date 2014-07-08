//Initialize gMap

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(43.7182712, -79.3777061),
    zoom: 10
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

//Add destination input

$( 'document' ).ready(function(){
  $('#add-btn').click(function(){
    var destInputs = $('.address-input').not("#submit-button, #del-btn, #add-btn");
    if (destInputs.length < 10){
      var endPoint = $('#end-pt')
      var clonedInput = endPoint.clone();
      clonedInput.insertAfter(endPoint)
    };
  });
});


//Delete destination input
$( 'document' ).ready(function(){
  $('#del-btn').click(function(){
    var destInputs = $('.address-input').not("#submit-button, #del-btn, #add-btn");
    if (destInputs.length > 2){
      destInputs.last().remove();
    };
  });
});

//Some food for thought:
/* In console, this works to recieve value of #start-pt input:
var aValue = $('#start-pt').val();

However this does not:*/

// $('#submit-button').click(function(){
// var input = $('#start-pt');
// var bValue = input.val();
// console.log(bValue);
// console.log("Function done...")
// return false;
// })