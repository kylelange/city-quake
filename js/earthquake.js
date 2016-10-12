function Quake() {

}

Quake.prototype.getQuakes = function(place, magnitude, displayQuake){
  $.get("http://api.openhazards.com/GetEarthquakeProbability?q=" + place + "&m=" + magnitude + "&r=100").then(function(response){
    console.log(response);
    displayQuake(place, magnitude, response.forecast.prob);
  });
}


exports.quakeModule = Quake;
