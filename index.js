/**
 * Returns the calculated checksum from the passed data
 * @param {(Number[]|Number)} data The array of numbers to checksum
 * @returns {Number} Checksum, -1 if unknown parameter
 */
function calculate(data){
    var checksum = 0x00;
    if (Array.isArray(data)){
        data.forEach(function(number){
            checksum += number;
        });
    } else {
        if (!Number.isNaN(data)){
            if (Number.isInteger(data)){
                if (data >= 0){
                    checksum = data;
                } else {
                    return -1;
                }
            } else {
                return -1;
            }
        } else {
            return -1;
        }
    }
    checksum %= 128;
    checksum = 128 - checksum;
    return checksum;
};

module.exports = calculate;