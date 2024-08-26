var reduce = function(nums, fn, init) {
    let b=init
    for(i=0;i<nums.length;i++){
    b=fn(b,nums[i])
    } 
    return b;
};