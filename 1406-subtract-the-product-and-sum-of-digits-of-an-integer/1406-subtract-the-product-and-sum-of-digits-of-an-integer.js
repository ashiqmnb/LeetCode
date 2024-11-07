/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const numArr = String(n).split("")
    const product = numArr.reduce((acc, cur) => acc * Number(cur), 1 )
    const sum = numArr.reduce((acc, cur) => acc + Number(cur), 0)
    return product - sum
};