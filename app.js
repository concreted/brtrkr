var Bart = require('./bart');

var bart = new Bart('MW9S-E7SL-26DU-VV8V');

bart.query('etd', {orig: 'ucty', dir: 'n'}, function(result) {
  var root = result.root;
  var station = root.station[0];
  var destinations = station.etd;
  console.log(station);
  console.log(destinations[0].estimate);
});

