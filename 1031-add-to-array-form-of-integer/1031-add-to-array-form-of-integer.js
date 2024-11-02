/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    // let str = num.join("");
    // let number = Number(str);
    // let result = number + k;
    // let str2 = String(result)
    // let arr = [];
    // for(let letter of str2){
    //     arr.push(Number(letter))
    // }
    // return arr

    // Convert the array `num` to an integer by joining its elements and parsing it.
    let numAsInt = BigInt(num.join(''));

    // Add `k` to the integer value of `num`
    let sum = numAsInt + BigInt(k);

    // Convert the sum back to a string, split it into individual characters,
    // map them to numbers, and return as an array
    return sum.toString().split('').map(Number);
};