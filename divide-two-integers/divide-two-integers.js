/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let isPositive = true;
    let result = 0;
    let count = 1;
    let base = divisor
    
    if(dividend > 0 !== divisor > 0) isPositive = false;
    if(dividend === 0) return 0;
    if(divisor === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    // while(dividend >= divisor) {
    //     dividend -= divisor;
    //     result += 1;
    // };
    
    while (dividend >= divisor) {
        count = 1;
        base = divisor;
        while (base <= (dividend >> 1)) {
            base = base << 1;
            count = count << 1;
        }
        result += count;
        dividend -= base;
    }
    
    if(!isPositive) result = -result;
    return result;
};