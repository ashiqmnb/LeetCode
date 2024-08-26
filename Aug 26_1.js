// 1.A single number is a number that appeared only once in the MyNumbers table.
// Find the largest single number. If there is no single number, report null.
// Eg:
// Input:[1,2,3,2,3,4,5,6,6,7,8]
// Output:8
// Input:[1,1,2,2]
// Output:null



const largestSingle = (arr)=>{
    let obj={};
    for(num of arr){
        if(obj[num] === undefined){
            obj[num] = 1;
        }
        else{
            obj[num]+=1;
        }
    }
    // console.log(obj);
    let newArr = [];
    for(i in obj){
        if (obj[i] === 1) {
            // console.log(i);
            newArr.push(i)
        }
    }
    if(newArr.length == 0){
        console.log(null);
        
    }
    else{
        console.log(Math.max(...newArr));
    }
    
}


let arr = [1,2,3,2,3,4,5,6,6,7,8,9]
// let arr = [1,1,2,2]
largestSingle(arr)

