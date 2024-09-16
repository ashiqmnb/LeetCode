/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    else{
        let y = x.toString().split("").reverse().join("")
        if(y==x){
            return true
        }
        else{
            return false
        }
    }
};