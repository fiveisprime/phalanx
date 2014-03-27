var phalanx = require('../')
  , sinon   = require('sinon')
  , res     = {};

res.send = function() {};
res.render = function() {};
res.json = function() {};

describe('400 status codes', function() {

  describe('send', function() {

    beforeEach(function() {
      if (res.send.restore) res.send.restore();
      sinon.spy(res, 'send');
    });

    it('should send a 400 for bad request', function() {
      phalanx.badRequest('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(400);
    });

    it('should send a 401 for unauthorized', function() {
      phalanx.unauthorized('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(401);
    });

    it('should send a 403 for forbidden', function() {
      phalanx.forbidden('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(403);
    });

    it('should send a 404 for not found', function() {
      phalanx.notFound('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(404);
    });

    it('should send a 405 for method not allowed', function() {
      phalanx.methodNotAllowed('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(405);
    });

    it('should send a 406 for not acceptable', function() {
      phalanx.notAcceptable('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(406);
    });

    it('should send a 407 for proxy authentication required', function() {
      phalanx.proxyAuthenticationRequired('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(407);
    });

    it('should send a 408 for request timeout', function() {
      phalanx.requestTimeout('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(408);
    });

    it('should send a 409 for conflict', function() {
      phalanx.conflict('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(409);
    });

    it('should send a 410 for gone', function() {
      phalanx.gone('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(410);
    });

  });

  describe('render', function() {

    beforeEach(function() {
      if (res.render.restore) res.render.restore();
      sinon.spy(res, 'render');
    });

    it('should send a 400 and render a view for bad request', function() {
      phalanx.badRequest('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(400);
    });

    it('should send a 401 and render a view for unauthorized', function() {
      phalanx.unauthorized('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(401);
    });

    it('should send a 403 and render a view for forbidden', function() {
      phalanx.forbidden('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(403);
    });

    it('should send a 404 and render a view for not found', function() {
      phalanx.notFound('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(404);
    });

    it('should send a 405 and render a view for method not allowed', function() {
      phalanx.methodNotAllowed('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(405);
    });

    it('should send a 406 and render a view for not acceptable', function() {
      phalanx.notAcceptable('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(406);
    });

    it('should send a 407 and render a view for proxy authentication required', function() {
      phalanx.proxyAuthenticationRequired('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(407);
    });

    it('should send a 408 and render a view for request timeout', function() {
      phalanx.requestTimeout('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(408);
    });

    it('should send a 409 and render a view for conflict', function() {
      phalanx.conflict('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(409);
    });

    it('should send a 410 and render a view for gone', function() {
      phalanx.gone('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(410);
    });

  });

  describe('json', function() {

    beforeEach(function() {
      if (res.json.restore) res.json.restore();
      sinon.spy(res, 'json');
    });

    it('should send json a 400 for bad request', function() {
      phalanx.badRequest('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(400);
    });

    it('should send json a 401 for unauthorized', function() {
      phalanx.unauthorized('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(401);
    });

    it('should send json a 403 for forbidden', function() {
      phalanx.forbidden('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(403);
    });

    it('should send json a 404 for not found', function() {
      phalanx.notFound('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(404);
    });

    it('should send json a 405 for method not allowed', function() {
      phalanx.methodNotAllowed('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(405);
    });

    it('should send json a 406 for not acceptable', function() {
      phalanx.notAcceptable('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(406);
    });

    it('should send a json 407 for proxy authentication required', function() {
      phalanx.proxyAuthenticationRequired('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(407);
    });

    it('should send a json 408 for request timeout', function() {
      phalanx.requestTimeout('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(408);
    });

    it('should send a json 409 for conflict', function() {
      phalanx.conflict('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(409);
    });

    it('should send a json 410 for gone', function() {
      phalanx.gone('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(410);
    });

  });

});
