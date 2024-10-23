/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for(let num of nums){
        const str = String(num);
        if(str.length % 2 == 0){
            count++
        }
    }
    return count
};