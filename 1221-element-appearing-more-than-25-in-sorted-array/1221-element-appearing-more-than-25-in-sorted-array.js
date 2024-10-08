/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const n = arr.length
    if (n === 0) return null;
    const twentyFivePercent = n / 4
    let count

    for(let i = 0; i < n; i++){
        if(arr[i] !== arr[i-1]){
            count = 1
        }
        else{
            count ++
        }
        if(count > twentyFivePercent){
            return arr[i]
        }
    }
};