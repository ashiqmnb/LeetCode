/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1]; // Initialize the first row with [1]
    
    for (let i = 1; i <= rowIndex; i++) {
        // Create the next row using the previous row values
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1]; // Update the current row based on       previous row
        }
        row.push(1); // Append 1 at the end of each row
    }
    
    return row;
};