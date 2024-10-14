/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //     for(let row of matrix){
    //     for(let num of row){
    //         if(num === target){
    //             return true
    //         }
    //     }
    // }
    // return false
        let i = 0;
    let j = matrix[0].length - 1;
    while (j >= 0 && i < matrix.length) {
        if (matrix[i][j] === target)
            return true;
        if (j - 1 >= 0 && matrix[i][j - 1] < target) {
            i++;
        } else {
            if (j - 1 < 0)
                i++;
            else
                j--;
        }
    }
    return false;
};