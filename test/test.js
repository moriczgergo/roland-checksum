var assert = require("assert");
var rolandChecksum = require("./../index.js");
describe("rolandChecksum()", function(){
	it("should return a valid checksum when an array of numbers are passed", function(){
		assert.equal(0x20, rolandChecksum([0x20, 0x00, 0x00, 0x74, 0x65, 0x73, 0x74]));
	});
	it("should return a valid checksum when a number is passed", function(){
		assert.equal(0x60, rolandChecksum(0x20));
	});
	it("should return -1 when a non-number value is passed", function(){
		assert.equal(-1, rolandChecksum("hello"));
		assert.equal(-1, rolandChecksum(true));
		assert.equal(-1, rolandChecksum(NaN));
	});
	it("should return -1 when a non-integer number is passed", function(){
		assert.equal(-1, rolandChecksum(0.1));
		assert.equal(-1, rolandChecksum(Math.PI));
		assert.equal(-1, rolandChecksum(Infinity));
		assert.equal(-1, rolandChecksum(-Infinity));
	});
	it("should return -1 when a negative number is passed", function(){
		assert.equal(-1, rolandChecksum(-1));
	});
});