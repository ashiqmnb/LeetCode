/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //initialize triagle array
    const triangles = []
    
    if(numRows === 0){
        return triangles
    }

    // add first row
    triangles.push([1])

    // add each row, starting from second row
    for(let i = 1; i < numRows; i++){
        const preRow = triangles[i-1]
        const newRow = []

        // add first elememt
        newRow.push(1);
    
        // generate each element by sum
        for(let j = 1; j < i; j++){
            newRow.push(preRow[j]+preRow[j-1])
        }

        // add last elememt
        newRow.push(1);

        // push the row into triangles
        triangles.push(newRow)
    }
    return triangles
};