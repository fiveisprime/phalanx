var Phalanx = require('../lib/phalanx');

describe('initialization', function() {

  it('should initialize with a string', function() {
    var t = new Phalanx(404, 'Error string');

    t.message.should.equal('Error string');
  });

  it('should initialize with an Error', function() {
    var e = new Phalanx(404, new Error('Error object'));

    e.message.should.equal('Error object');
  });

});
