/**
 * Returns the calculated checksum from the passed data
 * @param {(Number[]|Number)} data The array of numbers to checksum
 * @returns {Number} The checksum
 */
module.exports = function (data) {
  var checksum = Array.isArray(data) ? data.reduce((a, b) => a + b, 0) : data // If input is array, sum array. Otherwise, use input.

  checksum %= 128
  checksum = 128 - checksum
  return checksum
}
