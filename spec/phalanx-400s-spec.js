var phalanx = require('../')
  , res     = {};

res.send = function() {};
res.render = function() {};

describe('400 status codes', function() {

  describe('send', function() {

    it('should send a 400 for bad request', function() {
      spyOn(res, 'send');
      phalanx.badRequest('Bad request.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(400);
    });
    
    it('should send a 401 for unauthorized', function() {
      spyOn(res, 'send');
      phalanx.unauthorized('Unauthorized.').send(res);

      expect(res.send).wasCalled();
      expect(res.statusCode).toEqual(401);
    });

  });

  describe('render', function() {
    
    it('should send a 400 and render a view for bad request', function() {
      spyOn(res, 'render');
      phalanx.badRequest('Bad request.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(400);
    });
    
    it('should send a 401 and render a view for unauthorized', function() {
      spyOn(res, 'render');
      phalanx.unauthorized('Unauthorized.').render(res, 'test');

      expect(res.render).wasCalled();
      expect(res.statusCode).toEqual(401);
    });
    
  });

});
