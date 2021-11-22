/**
 * @param {string} s
 * @return {number}
 */



var lengthOfLastWord = function(s) {
    let arr = s.replace(/\s\s+/g, ' ').split(' ')
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length === 0) {
            arr.splice(i, 1)
        }
    }
    return arr[arr.length - 1].length
};