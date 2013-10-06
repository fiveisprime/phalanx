var Phalanx = require('./lib/phalanx');

//
// The request cannot be fulfilled due to bad syntax.
//
exports.badRequest = function(message) {
  return new Phalanx(400, message);
};

//
// Similar to 403 Forbidden, but specifically for use when authentication is
//    required and has failed or has not yet been provided. The response must
//    include a WWW-Authenticate header field containing a challenge applicable
//    to the requested resource. See Basic access authentication and Digest
//    access authentication.
// Note that the WWW-Authenticate header is set by Express so there is no need
//    to add it. It is expected that the user set the header value with
//    custom data if necessary.
//
exports.unauthorized = function(message) {
  return new Phalanx(401, message);
};

//
// The request was a valid request, but the server is refusing to respond to
//    it. Unlike a 401 Unauthorized response, authenticating will make no
//    difference. On servers where authentication is required, this commonly
//    means that the provided credentials were successfully authenticated but
//    that the credentials still do not grant the client permission to access
//    the resource (e.g., a recognized user attempting to access restricted
//    content).
//
exports.forbidden = function(message) {
  return new Phalanx(403, message);
};

//
// The requested resource could not be found but may be available again in the
//    future. Subsequent requests by the client are permissible.
//
exports.notFound = function(message) {
  return new Phalanx(404, message);
};

//
// A request was made of a resource using a request method not supported by
//    that resource; for example, using GET on a form which requires data to be
//    presented via POST, or using PUT on a read-only resource.
//
exports.methodNotAllowed = function(message) {
  return new Phalanx(405, message);
};

//
// The requested resource is only capable of generating content not acceptable
//    according to the Accept headers sent in the request.
//
exports.notAcceptable = function(message) {
  return new Phalanx(406, message);
};

//
// The server timed out waiting for the request. According to W3 HTTP
//    specifications: "The client did not produce a request within the time
//    that the server was prepared to wait. The client MAY repeat the request
//    without modifications at any later time."
//
exports.requestTimeout = function(message) {
  return new Phalanx(408, message);
};

//
// Indicates that the resource requested is no longer available and will not be
//    available again. This should be used when a resource has been
//    intentionally removed and the resource should be purged. Upon receiving a
//    410 status code, the client should not request the resource again in the
//    future. Clients such as search engines should remove the resource from
//    their indices. Most use cases do not require clients and search engines
//    to purge the resource, and a "404 Not Found" may be used instead.
//
exports.gone = function(message) {
  return new Phalanx(410, message);
};

//
// A generic error message, given when no more specific message is suitable.
//
exports.internalServerError = function(message) {
  return new Phalanx(500, message);
};

//
// The server either does not recognize the request method, or it lacks the
//    ability to fulfill the request. Usually this implies future
//    availability (e.g., a new feature of a web-service API).
//
exports.notImplemented = function(message) {
  return new Phalanx(501, message);
};

//
// The server was acting as a gateway or proxy and received an invalid response
//    from the upstream server.
//
exports.badGateway = function(message) {
  return new Phalanx(502, message);
};

//
// The server is currently unavailable (because it is overloaded or down for
//    maintenance). Generally, this is a temporary state. Sometimes, this can
//    be permanent as well on test servers.
//
exports.serviceUnavailable = function(message) {
  return new Phalanx(503, message);
};

//
// The server was acting as a gateway or proxy and did not receive a timely
//    response from the upstream server.
//
exports.gatewayTimeout = function(message) {
  return new Phalanx(504, message);
};
