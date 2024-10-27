/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length == 0) return 0;

    var maxCount = 1;
    var count = 1;
    for(i = 0; i < nums.length; i++){
        if(nums[i+1] > nums[i]){
            count++;
            maxCount = Math.max(maxCount, count);
        }
        else{
            count = 1;
        }
    }
    return maxCount;
};