var phalanx = require('../')
  , sinon   = require('sinon')
  , res     = {};

res.send = function() {};
res.render = function() {};
res.json = function() {};

describe('500 status codes', function() {

  describe('send', function() {

    beforeEach(function() {
      if (res.send.restore) res.send.restore();
      sinon.spy(res, 'send');
    });

    it('should send a 500 for internal server error', function() {
      phalanx.internalServerError('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(500);
    });

    it('should send a 501 for not implemented', function() {
      phalanx.notImplemented('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(501);
    });

    it('should send a 502 for bad gateway', function() {
      phalanx.badGateway('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(502);
    });

    it('should send a 503 for service unavailable', function() {
      phalanx.serviceUnavailable('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(503);
    });

    it('should send a 504 for gateway timeout', function() {
      phalanx.gatewayTimeout('Error').send(res);

      res.send.called.should.be.true;
      res.statusCode.should.equal(504);
    });

  });

  describe('render', function() {

    beforeEach(function() {
      if (res.render.restore) res.render.restore();
      sinon.spy(res, 'render');
    });

    it('should send a 500 and render a view for internal server error', function() {
      phalanx.internalServerError('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(500);
    });

    it('should send a 501 and render a view for not implemented', function() {
      phalanx.notImplemented('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(501);
    });

    it('should send a 502 and render a view for bad gateway', function() {
      phalanx.badGateway('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(502);
    });

    it('should send a 503 and render a view for service unavailable', function() {
      phalanx.serviceUnavailable('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(503);
    });

    it('should send a 504 and render a view for gateway timeout', function() {
      phalanx.gatewayTimeout('Error').render(res, 'test');

      res.render.called.should.be.true;
      res.render.calledWith('test', { error: 'Error' }).should.be.true;
      res.statusCode.should.equal(504);
    });

  });

  describe('json', function() {

    beforeEach(function() {
      if (res.json.restore) res.json.restore();
      sinon.spy(res, 'json');
    });

    it('should send a json 500 for internal server error', function() {
      phalanx.internalServerError('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(500);
    });

    it('should send a json 501 for not implemented', function() {
      phalanx.notImplemented('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(501);
    });

    it('should send a json 502 for bad gateway', function() {
      phalanx.badGateway('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(502);
    });

    it('should send a json 503 for service unavailable', function() {
      phalanx.serviceUnavailable('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(503);
    });

    it('should send a json 504 for gateway timeout', function() {
      phalanx.gatewayTimeout('Error').json(res);

      res.json.called.should.be.true;
      res.statusCode.should.equal(504);
    });

  });

});
