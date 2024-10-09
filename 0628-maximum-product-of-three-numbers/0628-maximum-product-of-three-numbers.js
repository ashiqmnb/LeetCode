/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // const threeNum = nums.sort((a,b) => a-b).splice(nums.length-3)
    // return threeNum.reduce((acc,cur)=> acc*cur,1)
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

    let product2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(product1, product2);
};