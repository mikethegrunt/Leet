/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let isNegative = false;
    let result = '';
    let digit = new RegExp("[0-9]");
    let letter = new RegExp("[A-Za-z]")
    for (let i = 0; i < s.length; i++) {
        if (letter.test(s[i]) || s[i] === '.') {
                break;
        };
        if (s[i] === '+' && !digit.test(s[i + 1]) || s[i] === '+' && result.length > 0) {
            break;
        }
        if (s[i] === '-' && !digit.test(s[i + 1]) || s[i] === '-' && result.length > 0) {
            break;
        };
        if (s[i] === ' ' && result.length > 0) {
            break;
        }
        if (s[i] === '-' && digit.test(s[i + 1])) {
            isNegative = true;
        };
        if (digit.test(s[i])) {
            result += s[i];
        };
    }
    if(Number(result) > 0x7FFFFFFF && isNegative) {
        return -2147483648;
    }
    if(Number(result) > 0x7FFFFFFF && !isNegative) {
        return 2147483647;
    }
    if (result === '') {
        return 0;
    }
    return isNegative ? -Number(result) : Number(result);
};