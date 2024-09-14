/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i in nums){
        for(j in nums){
            if(j==i){
                break;
            }
            else if(nums[i]+nums[j] == target){
                let arr = []
                // console.log(nums[i],nums[j]);
                arr.push(Number(j))
                arr.push(Number(i))
                // console.log(arr);
                return arr;
            }
        }
    }
};