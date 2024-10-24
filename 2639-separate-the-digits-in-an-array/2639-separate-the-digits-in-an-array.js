/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const arr = [];
    for(let num of nums){
        const str = String(num)
        for(let i in str){
            arr.push(Number(str[i]))
        }
    }
    return arr
};