/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let arr = []
    for(let num of nums){
        if(nums.indexOf(num) == nums.lastIndexOf(num)){
            arr.push(num)
        }
    }
    if(arr.length == 0){
        return 0;
    }
    else{
        return arr.reduce((acc, cur) => acc + cur);
    }
};