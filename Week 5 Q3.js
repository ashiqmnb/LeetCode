// . Write a function that reverses all the words in a sentence that start with a particular
// letter.(score 2)
// Examples :-
// specialReverse("word searches are super fun", "s") ➞ "word sehcraes are repus fun"
// specialReverse("first man to walk on the moon", "m") ➞ "first nam to walk on the noom"
// specialReverse("peter piper picked pickled peppers", "p") ➞ "retep repip dekcip delkcip
// sreppep"


// Question 3

const specialReverse = (str, x)=>{
    const arr = str.split(" ")
    var newArr = [];
    console.log(arr);
    arr.map((item)=>{
        if(item.startsWith(x)){
            item = item.split("").reverse().join("")
            newArr.push(item)
        }
        else{
            newArr.push(item)
        }
    })
    console.log(newArr);
}

// specialReverse("word searches are super fun", "s")
// specialReverse("first man to walk on the moon","m")
specialReverse("peter piper picked pickled peppers", "p")
