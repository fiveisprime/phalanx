var Phalanx = require('../lib/phalanx');

describe('initialization', function() {

  it('should initialize with a string', function() {
    var t = new Phalanx(000, 'Error string');

    expect(t.message).toEqual('Error string');
  });

  it('should initialize with an Error', function() {
    var e = new Phalanx(000, new Error('Error object'));

    expect(e.message).toEqual('Error object');
  });

});
