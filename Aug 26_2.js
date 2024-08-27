// 2.Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The
// returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

// EgInput: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.




const mySqrt = (x)=>{
    if(x<=3){
        return 1;
    }
    for(let i=1; i<= x/2; i++){
        if(i*i == x){
            return i;
        }
        else if(i*i < x){
            continue;
        }
        else if(i*i > x){
            return i-1;
        }
    }


    // if(x<2){
    //     return x
    // }

    // let left = 1;
    // let right = Math.floor(x/2);

    // while(left <= right){
    //     let mid = Math.floor(( left + right ) / 2);
    //     let midSqure = mid * mid;

    //     if(midSqure == x){
    //         return mid
    //     }
    //     else if(midSqure < x){
    //         left = mid+1
    //     }
    //     else{
    //         right = mid-1
    //     }
    // }
    // return Math.floor(right)
}


console.log(mySqrt(5));
console.log(Math.sqrt(5));




