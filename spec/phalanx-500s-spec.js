var phalanx = require('../')
  , res     = {};

res.send = function() {};
res.render = function() {};

describe('500 status codes', function() {

  describe('send', function() {

    it('should send a 500 for internal server error', function() {
      spyOn(res, 'send');
      phalanx.internalServerError('Internal error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(500);
    });

    it('should send a 501 for not implemented', function() {
      spyOn(res, 'send');
      phalanx.notImplemented('Internal error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(501);
    });

    it('should send a 502 for bad gateway', function() {
      spyOn(res, 'send');
      phalanx.badGateway('Internal error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(502);
    });

    it('should send a 503 for service unavailable', function() {
      spyOn(res, 'send');
      phalanx.serviceUnavailable('Internal error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(503);
    });

    it('should send a 504 for gateway timeout', function() {
      spyOn(res, 'send');
      phalanx.gatewayTimeout('Internal error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(504);
    });

  });

  describe('render', function() {

    it('should send a 500 and render a view for internal server error', function() {
      spyOn(res, 'render');
      phalanx.internalServerError('Internal error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(500);
    });

    it('should send a 501 and render a view for not implemented', function() {
      spyOn(res, 'render');
      phalanx.notImplemented('Internal error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(501);
    });

    it('should send a 502 and render a view for bad gateway', function() {
      spyOn(res, 'render');
      phalanx.badGateway('Internal error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(502);
    });

    it('should send a 503 and render a view for service unavailable', function() {
      spyOn(res, 'render');
      phalanx.serviceUnavailable('Internal error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(503);
    });

    it('should send a 504 and render a view for gateway timeout', function() {
      spyOn(res, 'render');
      phalanx.gatewayTimeout('Internal error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(504);
    });

  });

});
