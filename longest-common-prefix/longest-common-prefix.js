/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    // find the shortest length string
    
    let shortest = -1;
    for(var i = 0; i < strs.length; i++) {
        if(shortest === -1 || strs[i].length < shortest) {
            shortest = strs[i].length;
        }
    }
    
    // create variable string to store and grow matching string
    let result = '';
    let total = strs.length;
    
    
    // loop through each index of array that is a string
    for(var i = 0; i < shortest; i++) {
        let counters = 1
        // go through input array to see if each strings first index match
        for(var j = 0; j < strs.length; j++) {
            if(strs[j+1] && strs[j][i] === strs[j+1][i]) {
                counters += 1
            }
        }
        if(total === counters) {
            result += strs[0][i]
        } else {
            break;
        }
    }
    
    // return string of longest common or "There is no common prefix among the input strings."
    return result
    
};