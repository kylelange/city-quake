var apiKey = require('./../.env').apiKey;
var Quake = require('./../js/earthquake.js').quakeModule;

function City() {
}

City.prototype.getLatLong = function(place, displayLatLong){
  var that = this; // redefine the context of "this" so that you can use it in the API request
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + place + '&key=' + apiKey).then(function(response){
    displayLatLong(place, response.results[0].geometry.location.lat, response.results[0].geometry.location.lng);
    that.lat = response.results[0].geometry.location.lat;
    that.lng = response.results[0].geometry.location.lng;

  }).fail(function(error){
    $("#output-lat-long").text(error.responseJSON.message);
  });
  console.log("inside getLatLong method: " + this.lat);
};

City.prototype.getLocation = function(place, displayFunction) {
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + place + '&key=' + apiKey).then(function(response) {
    displayFunction(place, response.results[0].address_components[1].long_name);
  }).fail(function(error) {
    $('#output-county').text(error.responseJSON.message);
  });
};


exports.cityModule = City;
