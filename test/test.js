/* eslint-env mocha */

var assert = require('assert')
var rolandChecksum = require('./../index.js')
describe('rolandChecksum()', function () {
  it('should return a valid checksum when an array of numbers are passed', function () {
    assert.equal(0x20, rolandChecksum([0x20, 0x00, 0x00, 0x74, 0x65, 0x73, 0x74]))
  })
  it('should return a valid checksum when a number is passed', function () {
    assert.equal(0x60, rolandChecksum(0x20))
  })
  it('should return NaN when a non-number value is passed', function () {
    assert.equal(true, isNaN(rolandChecksum('hello')))
    assert.equal(true, isNaN(rolandChecksum(NaN)))
  })
})
