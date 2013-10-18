var util = require('util');

var Phalanx = function(code, message) {
  if (util.isError(message)) {
    this.message = message.message;
  } else {
    this.message = message;
  }

  this.code = code;

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
// Send the error as JSON.
//
Phalanx.prototype.json = function(res) {
  res.statusCode = this.code;
  res.json(this);
};

//
// Render the specified view.
//
Phalanx.prototype.render = function(res, view) {
  res.statusCode = this.code;
  res.render(view, { error: this.message });
};

module.exports = Phalanx;
