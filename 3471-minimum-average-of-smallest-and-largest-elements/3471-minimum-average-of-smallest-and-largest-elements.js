/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums = nums.sort((a,b)=> a-b);
    const length = nums.length
    let avg = []

    for(let i = 0; i<=length/2; i++){
        const n1=nums[i]
        const n2=nums[length-(i+1)]
        avg.push((n1+n2)/2)
    }
    return Math.min(...avg)
};