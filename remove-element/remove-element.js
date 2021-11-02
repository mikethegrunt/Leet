/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let counter = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = undefined;
            counter -= 1;
        }
    }
    nums.sort()
    return counter;
};