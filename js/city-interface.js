var City = require('./../js/city.js').cityModule;
var Quake = require('./../js/earthquake.js').quakeModule;

var displayFunction = function(place, display) {
  $('#output-county').text("Your place is located in " + place + ", within " + display + ".");
};

var displayNature = function(lat, lng, type, mag, area) {
  $('#output-quake').append("<li>" + type + " that had a magnitude of " + mag  + " at " + area + ".</li>");
};

var displayLatLong = function(place, lat, lng) {
};

$(document).ready(function(){
  $("#city-form").submit(function (){
    event.preventDefault();
    $('#output-quake').empty();
    var newCity = new City();
    var newQuake = new Quake();
    var place = $('#place').val();
    var mag = $('#mag').val();
    var startYear = $('#start-year').val();
    var startMonth = $('#start-month').val();
    var endYear = $('#end-year').val();
    var endMonth = $('#end-month').val();
    newCity.getLatLong(place, displayLatLong);
    setTimeout(function() {
      var lat = newCity.lat;
      var lng = newCity.lng;
      console.log("lat lng of submit event: " + lat + " " + lng);
      $('#disasterHeader').show();
      newCity.getLocation(place, displayFunction);
      newQuake.getInfo(lat, lng, mag, startYear, startMonth, endYear, endMonth, displayNature);
    }, 1500);
  });
});
