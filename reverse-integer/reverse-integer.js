/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = +String(Math.abs(x)).split('').reverse().join('');
    if (reverse > 0x7FFFFFFF) {
        return 0;
    }
    return x < 0 ? -reverse : reverse;
};