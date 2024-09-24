/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let singleNum = [];
    for(let num of nums){
        if(nums.indexOf(num) === nums.lastIndexOf(num)){
            singleNum.push(num)
        }
    }
    return singleNum
};