// ou are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.


function  sortpeople(names, heights){
    
    const people = names.map((name, index) => {
        return [name, heights[index]]
    })
    people.sort((a,b) => b[1] - a[1])

    return people.map(person => person[0]);
}

// let names = ["Alice","Bob","Bob"]
// let heights = [155,185,150]

let names = ["Mary","John","Emma"]
let heights = [180,165,170]

console.log(sortpeople(names, heights));
