var Tour = require('./../js/tour.js').tourModule;

var displayFunction = function(place, display) {
  $('#output-county').text("Your place is located in " + place + ", within " + display + ".");
}

// var displayView = function(place, display) {
//   $('#output-view').text(display);
// }

var displayLatLong = function(place, lat, long) {
  $('#output-lat-long').text("Your latitude is " + lat + ", and your longitude is " + long + ".");
}

$(document).ready(function(){
  var newTour = new Tour();
  $("#tour-form").submit(function (){
    event.preventDefault();
    var place = $('#place').val();
    newTour.getLocation(place, displayFunction);
    // newTour.getImage(place, displayView);
    newTour.getLatLong(place, displayLatLong);
  });
});
