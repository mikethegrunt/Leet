/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i = nums.length - 1; i >= -1; i--) {
        if (nums[i] === nums[i - 1]) {
            nums[i] = undefined          
        }
    }
    nums.sort((a, b) => (a - b))
    let counter;
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] === undefined) {
            counter = i
            break;
        }
    }
    return counter
};