/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Edge case: if the array is empty, return 0
    if (nums.length === 0) return 0;

    let k = 1; // `k` is the index of the next unique element

    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous one, it's unique
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // Move the unique element to the correct position
            k++; // Increment `k`
        }
    }

    return k; // `k` is the number of unique elements
};