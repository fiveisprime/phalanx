var util = require('util');

var Phalanx = function(code, message) {

  this.code = code;
  this.message = message;

  return this;
};

util.inherits(Phalanx, Error);

//
// Send an HTTP error response.
//
Phalanx.prototype.send = function(res) {
  res.statusCode = this.code;
  res.send(this);
};

//
// Render the specified view.
//
Phalanx.prototype.render = function(res, view) {
  res.statusCode = this.code;
  res.render(view, { error: this.message });
};

module.exports = Phalanx;
