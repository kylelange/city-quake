var City = require('./../js/city.js').cityModule;
var Quake = require('./../js/earthquake.js').quakeModule;

var displayQuake = function(place, magnitude, display) {
  $('#output-quake').text("The probability of an " + magnitude + " magnitude earthquake happening in" + place + " is " + display + "%.");
}

var displayFunction = function(place, display) {
  $('#output-county').text("Your place is located in " + place + ", within " + display + ".");
}

var displayLatLong = function(place, lat, long) {
  $('#output-lat-long').text("Your latitude is " + lat + ", and your longitude is " + long + ".");
}

$(document).ready(function(){
  var newCity = new City();
  var newQuake = new Quake();
  $("#city-form").submit(function (){
    event.preventDefault();
    var place = $('#place').val();
    var magnitude = $('#magnitude').val();
    newQuake.getQuakes(place, magnitude, displayQuake);
    newCity.getLocation(place, displayFunction);
    newCity.getLatLong(place, displayLatLong);
  });
});
