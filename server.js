var express = require('express');
var path = require('path');
var app = express();

var flower = require('./public/flower.js');
var grassEater = require('./public/grass_eater.js');
var grass = require('./public/grass.js');
var predator = require('./public/predator.js');
var mower = require('./public/mower.js');
var girl = require('./public/girl.js');
// var io =
// var fs

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});


function changeWeather(currentWeather) {
  if (currentWeather === 'Spring') {
    currentWeather = 'Summer';
  }
  if (currentWeather === 'Summer') {
    currentWeather = 'Autumn';
  }
  if (currentWeather === 'Autumn') {
    currentWeather = 'Winter';
  }
  if (currentWeather === 'Winter') {
    currentWeather = 'Spring';
  }
  return currentWeather;
}