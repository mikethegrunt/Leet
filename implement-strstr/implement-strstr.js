/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) return 0;
    if(!haystack) return -1;
    if(needle.length > haystack.length) return -1;
    
    let i = 0;
    let j = 0;
    
    while(i < haystack.length && j < needle.length) {
        if(haystack[i] === needle[j]) {
            i += 1;
            j += 1;
        } else {
            i += 1;
            i = i - j;
            j = 0;
        }
    }
    if(j === needle.length) return i - j;
    
    return -1;
};