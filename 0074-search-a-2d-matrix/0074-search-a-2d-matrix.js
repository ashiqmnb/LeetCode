/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let row of matrix){
        for(let num of row){
            if(num === target){
                return true
            }
        }
    }
    return false
};