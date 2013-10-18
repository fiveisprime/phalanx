var phalanx = require('../')
  , res     = {};

res.send = function() {};
res.render = function() {};
res.json = function() {};

describe('400 status codes', function() {

  describe('send', function() {

    it('should send a 400 for bad request', function() {
      spyOn(res, 'send');
      phalanx.badRequest('Error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(400);
    });

    it('should send a 401 for unauthorized', function() {
      spyOn(res, 'send');
      phalanx.unauthorized('Error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(401);
    });

    it('should send a 403 for forbidden', function() {
      spyOn(res, 'send');
      phalanx.forbidden('Error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(403);
    });

    it('should send a 404 for not found', function() {
      spyOn(res, 'send');
      phalanx.notFound('Error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(404);
    });

    it('should send a 405 for method not allowed', function() {
      spyOn(res, 'send');
      phalanx.methodNotAllowed('Error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(405);
    });

    it('should send a 406 for not acceptable', function() {
      spyOn(res, 'send');
      phalanx.notAcceptable('Error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(406);
    });

    it('should send a 407 for proxy authentication required', function() {
      spyOn(res, 'send');
      phalanx.proxyAuthenticationRequired('Error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(407);
    });

    it('should send a 408 for request timeout', function() {
      spyOn(res, 'send');
      phalanx.requestTimeout('Error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(408);
    });

    it('should send a 409 for conflict', function() {
      spyOn(res, 'send');
      phalanx.conflict('Error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(409);
    });

    it('should send a 410 for gone', function() {
      spyOn(res, 'send');
      phalanx.gone('Error.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(410);
    });

  });

  describe('render', function() {

    it('should send a 400 and render a view for bad request', function() {
      spyOn(res, 'render');
      phalanx.badRequest('Error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(400);
    });

    it('should send a 401 and render a view for unauthorized', function() {
      spyOn(res, 'render');
      phalanx.unauthorized('Error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(401);
    });

    it('should send a 403 and render a view for forbidden', function() {
      spyOn(res, 'render');
      phalanx.forbidden('Error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(403);
    });

    it('should send a 404 and render a view for not found', function() {
      spyOn(res, 'render');
      phalanx.notFound('Error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(404);
    });

    it('should send a 405 and render a view for method not allowed', function() {
      spyOn(res, 'render');
      phalanx.methodNotAllowed('Error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(405);
    });

    it('should send a 406 and render a view for not acceptable', function() {
      spyOn(res, 'render');
      phalanx.notAcceptable('Error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(406);
    });

    it('should send a 407 and render a view for proxy authentication required', function() {
      spyOn(res, 'render');
      phalanx.proxyAuthenticationRequired('Error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(407);
    });

    it('should send a 408 and render a view for request timeout', function() {
      spyOn(res, 'render');
      phalanx.requestTimeout('Error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(408);
    });

    it('should send a 409 and render a view for conflict', function() {
      spyOn(res, 'render');
      phalanx.conflict('Error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(409);
    });

    it('should send a 410 and render a view for gone', function() {
      spyOn(res, 'render');
      phalanx.gone('Error.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(410);
    });

  });

  describe('json', function() {

    it('should send json a 400 for bad request', function() {
      spyOn(res, 'json');
      phalanx.badRequest('Error.').json(res);

      expect(res.json).wasCalled();
      expect(res.statusCode).toEqual(400);
    });

    it('should send json a 401 for unauthorized', function() {
      spyOn(res, 'json');
      phalanx.unauthorized('Error.').json(res);

      expect(res.json).wasCalled();
      expect(res.statusCode).toEqual(401);
    });

    it('should send json a 403 for forbidden', function() {
      spyOn(res, 'json');
      phalanx.forbidden('Error.').json(res);

      expect(res.json).wasCalled();
      expect(res.statusCode).toEqual(403);
    });

    it('should send json a 404 for not found', function() {
      spyOn(res, 'json');
      phalanx.notFound('Error.').json(res);

      expect(res.json).wasCalled();
      expect(res.statusCode).toEqual(404);
    });

    it('should send json a 405 for method not allowed', function() {
      spyOn(res, 'json');
      phalanx.methodNotAllowed('Error.').json(res);

      expect(res.json).wasCalled();
      expect(res.statusCode).toEqual(405);
    });

    it('should send json a 406 for not acceptable', function() {
      spyOn(res, 'json');
      phalanx.notAcceptable('Error.').json(res);

      expect(res.json).wasCalled();
      expect(res.statusCode).toEqual(406);
    });

    it('should send json a 407 for proxy authentication required', function() {
      spyOn(res, 'json');
      phalanx.proxyAuthenticationRequired('Error.').json(res);

      expect(res.json).wasCalled();
      expect(res.statusCode).toEqual(407);
    });

    it('should send json a 408 for request timeout', function() {
      spyOn(res, 'json');
      phalanx.requestTimeout('Error.').json(res);

      expect(res.json).wasCalled();
      expect(res.statusCode).toEqual(408);
    });

    it('should send json a 409 for conflict', function() {
      spyOn(res, 'json');
      phalanx.conflict('Error.').json(res);

      expect(res.json).wasCalled();
      expect(res.statusCode).toEqual(409);
    });

    it('should send json a 410 for gone', function() {
      spyOn(res, 'json');
      phalanx.gone('Error.').json(res);

      expect(res.json).wasCalled();
      expect(res.statusCode).toEqual(410);
    });

  });

});
