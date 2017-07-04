var assert = require('assert');
var RolandChecksum = require('./../index.js')
describe('RolandChecksum()', function(){
    it('should return a valid checksum when an array of numbers are passed', function(){
        assert.equal(0x20, RolandChecksum([0x20, 0x00, 0x00, 0x74, 0x65, 0x73, 0x74]));
    });
    it('should return a valid checksum when a number is passed', function(){
        assert.equal(0x60, RolandChecksum(0x20));
    });
    it('should return -1 when a non-number value is passed', function(){
        assert.equal(-1, RolandChecksum("hello"));
        assert.equal(-1, RolandChecksum(true));
        assert.equal(-1, RolandChecksum(NaN));
    });
    it('should return -1 when a non-integer number is passed', function(){
        assert.equal(-1, RolandChecksum(0.1));
        assert.equal(-1, RolandChecksum(Math.PI));
        assert.equal(-1, RolandChecksum(Infinity));
        assert.equal(-1, RolandChecksum(-Infinity));
    });
    it('should return -1 when a negative number is passed', function(){
        assert.equal(-1, RolandChecksum(-1));
    });
});