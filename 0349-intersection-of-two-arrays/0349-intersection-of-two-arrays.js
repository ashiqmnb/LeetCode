/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    for(let num of nums1){
        if(nums2.includes(num) && !result.includes(num)){
            result.push(num)
        }
    }
    return result
};