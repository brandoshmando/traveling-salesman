//Initialize gMap

var map;
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
      var clonedInput = endPoint.clone().removeAttr("id");
      clonedInput.insertAfter(endPoint)
    };
  });

  //Delete destination input
  $('#del-btn').click(function(){
    var destInputs = $('.address-input').not("#submit-button, #del-btn, #add-btn");
    if (destInputs.length > 2){
      destInputs.last().remove();
    };
  });

  //Grab destination info
  $('#submit-button').click(function(ev){
    ev.preventDefault();
    var origin = $('#start-pt').val();
    var inputObjects = $('.address-input').not('#start-pt');
    var stringArray = [];
    console.log(origin)
    for (var i=0; i<inputObjects.length; i++){
      stringArray.push($(inputObjects[i]).val());
    }
    console.log(stringArray.join('|'))
    $.getJSON('http://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + origin + '&waypoints=optimize:true|' + stringArray.join('|') + ',&key=AIzaSyDW98VEJP8zclfeCey8rkHe8k1EMqH2kjs').done(function(data){
      console.log(data);
    });
  })

   // for (var i; i < addressValues.length; i++){
   //    geoWaypoints.push($.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addressValues[i], function(data){
   //      var latlng + "_" + i = data.results[i].geometry
   //    });
   //  };
  //   if ( wayPoints.length === 0){
  //     $.get("/http://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination +  'destination')
  //   }else{
      //do waypoints
    // }
  //   $.get("/http://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + origin +   )

  //   for (i=0; i<addressInputs.length; i++){
  //     addressValues.push(addressInputs[i].val());
  //   };
  // });
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
});

