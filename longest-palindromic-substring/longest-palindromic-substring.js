/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    // if input is null or length is less than 1
    
    if (s === null || s.length < 1) {
        return '';
    }
    
    // keep track of start and end indexes
    
    let start = 0;
    let end = 0;
    
    // loop through string
    
    for (let i = 0; i < s.length; i++) {
        
        // need to have helper function search with single char as center
        let first = helper(s, i, i);
        
        // need to have helper function search with two chars as center
        let second = helper(s, i, i + 1);
        
        // choose the longer of the returned values
        let length = Math.max(first, second);
        
        // if one of those helper functions returns a longer string than what end - start length is replace them
        if (length > end - start) {
            start = i - (length - 1) / 2;
            end = i + length / 2
        }
    }
    // return a slice of input from start to end
    return s.slice(Math.ceil(start), end + 1)
};

// helper function that uses while loop to compare chars in string at the loop.
let helper = (str, left, right) => {
    let l = left;
    let r = right;
    while (l >= 0 && r < str.length && str.charAt(l) === str.charAt(r)) {
        l--;
        r++;
    }
    return r - l - 1;
}