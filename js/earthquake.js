var City = require('./../js/city.js').cityModule;
function Quake() {
}

Quake.prototype.getInfo = function(lat, lng, displayNature){
  $.get('http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&starttime=2016-01-01&endtime=2016-10-13&latitude=' + lat + '&longitude=' + lng + '&maxradiuskm=50&limit=50').then(function(response) {
    console.log(response);
    if(response.features.length === 0) {
      $("#output-quake").append("<li>There are no disasters in your area.</li>");
    } else {
      for(var i = 0; i < response.features.length; i ++) {
        displayNature(lat, lng, response.features[i].properties.type, response.features[i].properties.mag, response.features[i].properties.place);
      }
    }
   }).fail(function(error){
    $("#output-quake").text(error.jsonerror);
  });
};


exports.quakeModule = Quake;

// function Dino () {
//
// }
//
// Dino.prototype.getDinoText = funtion (paragraphs, displayText) {
// $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=' + paragraphs).then(function(response){
//  	console.log(response);
//   displayText(paragraphs, response.item);
// }).fail(function(error){
// 	$('#output').text("There has been an error.");
// });
// }
