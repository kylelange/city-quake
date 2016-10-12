var apiKey = require('./../.env').apiKey;

function Tour() {

}

Tour.prototype.getLatLong = function(place, displayLatLong){
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + place + '&key=' + apiKey).then(function(response){
    console.log(response);
    displayLatLong(place, response.results[0].geometry.location.lat, response.results[0].geometry.location.lng);
  }).fail(function(error){
    $("#output-lat-long").text(error.responseJSON.message);
  });
}

// Tour.prototype.getImage = function(place, displayView) {
//   $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + place + '&key=' + apiKey).then(function(response){
//     console.log(response);
//     displayView(place, response.results[0].geometry.viewport);
//   }).fail(function(error){
//     $("#output-view").text(error.responseJSON.message);
//   });
// }


Tour.prototype.getLocation = function(place, displayFunction) {
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + place + '&key=' + apiKey).then(function(response) {
    console.log(response);
    displayFunction(place, response.results[0].address_components[1].long_name);
  }).fail(function(error) {
    $('#output-county').text(error.responseJSON.message);
  });
}


exports.tourModule = Tour;
