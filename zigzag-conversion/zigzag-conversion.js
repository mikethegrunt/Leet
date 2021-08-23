/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = new Array(numRows);
    arr.fill('')
    let flag = true;
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        // need to concat char into specific index in array
        arr[counter] += s[i];
        
        if (numRows !== 1) {
            // need to increment or decrement counter
            if (flag) {
            counter++
            } else {
                counter--
            }
            // need to check if counter is equal to numRows - 1 or equal to 0 and make sure flag is correct (true === increment // false === decrement)
            if (counter === numRows - 1) {
                flag = false;
            }
            if (counter === 0) {
                flag = true;
            }
        }
        
    }
    return arr.join('')
};