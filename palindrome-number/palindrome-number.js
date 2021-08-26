/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    if (str.length % 2 === 0) {
        let front = str.slice(0, str.length/2);
        let back = str.slice(str.length/2).split('').reverse().join('');
        if (back === front) {
            return true;
        }
    } else {
        let oddFront = str.slice(0, Math.floor(str.length/2));
        let oddBack = str.slice(Math.ceil(str.length/2)).split('').reverse().join('');
        if (oddFront === oddBack) {
            return true;
        }
    }
    return false;
};