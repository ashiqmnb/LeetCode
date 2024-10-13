/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // return String(num1*num2)

        // Edge case: If either number is "0", the result is "0"
    if (num1 === "0" || num2 === "0") return "0";

    // Initialize an array to store the results of each multiplication
    let result = new Array(num1.length + num2.length).fill(0);

    // Reverse both strings to simplify the multiplication process
    num1 = num1.split("").reverse();
    num2 = num2.split("").reverse();

    // Multiply each digit of num1 with each digit of num2
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            // Multiply the digits and add to the current position in result
            let product = num1[i] * num2[j];
            let sum = result[i + j] + product;
            
            // Place the units in the current position and carry over to the next
            result[i + j] = sum % 10;
            result[i + j + 1] += Math.floor(sum / 10);
        }
    }

    // Reverse the result array and join to form the final string
    result = result.reverse();

    // Remove leading zeros
    while (result[0] === 0) {
        result.shift();
    }

    // Join the result and return as a string
    return result.join("");
};