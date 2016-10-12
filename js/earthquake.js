var Xml = require('./../js/xml.js').xmlModule;
function Quake() {

}

Quake.prototype.getQuakes = function(place, magnitude, displayQuake){
  $.get("http://api.openhazards.com/GetEarthquakeProbability?q=" + place + "&m=" + magnitude + "&r=100").then(function(response){
    var xml = new Xml(response);
    console.log(xml);
    displayQuake(place, magnitude, response.forecast.prob);
  });
}


exports.quakeModule = Quake;
