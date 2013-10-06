var Phalanx = require('./lib/phalanx');

exports.badRequest = function(message) {
  return new Phalanx(400, message);
};

exports.unauthorized = function(message) {
  return new Phalanx(401, message);
};

exports.forbidden = function(message) {
  return new Phalanx(403, message);
};

exports.notFound = function(message) {
  return new Phalanx(404, message);
};

exports.methodNotAllowed = function(message) {
  return new Phalanx(405, message);
};

exports.notAcceptable = function(message) {
  return new Phalanx(406, message);
};

exports.requestTimeout = function(message) {
  return new Phalanx(408, message);
};

exports.gone = function(message) {
  return new Phalanx(410, message);
};

exports.notImplemented = function(message) {
  return new Phalanx(501, message);
};
