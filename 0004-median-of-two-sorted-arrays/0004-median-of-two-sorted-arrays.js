/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums = [...nums2,...nums1].sort((a,b)=>a-b)
    if(nums.length % 2 == 0){
        return ((nums[nums.length/2] + nums[(nums.length/2)-1]) /2)
    }
    else{
        return nums[Math.floor(nums.length/2)]
    }
};