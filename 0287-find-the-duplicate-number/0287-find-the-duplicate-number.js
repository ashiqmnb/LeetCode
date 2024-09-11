/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let val = Math.abs(nums[i]);
        if (nums[val] < 0) {
            return val; // Duplicate found
        }
        nums[val] = -nums[val]; // Negate the value at index `val`
    }
    return -1; 
};