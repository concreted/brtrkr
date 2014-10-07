var parseXML = require('xml2js').parseString;
var request = require('request');
var _ = require('underscore');

var Bart = function(key) {
  this.key = key;
  this.url = 'http://api.bart.gov/api/etd.aspx';

  this.buildQuery = function(cmd, args) {
    var queryString = this.url + '?cmd=' + cmd + '&key=' + this.key;
    _.each(args, function(value, key, list) {
      queryString += '&' + key + '=' + value;
    });
    return queryString;
  }

  // cb expects an object - parsed from XML
  this.query = function(cmd, args, cb) {
    request(this.buildQuery(cmd, args), function(error, response, body) {
      if (!error && response.statusCode == 200) {
        parseXML(body, function(err, result) {
          cb(result);
        });
      }
    })
  }
}

module.exports = Bart;
