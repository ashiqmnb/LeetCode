/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {

    // if(!letters.includes(target)){
    //     return letters[0];
    // }
    // else{
    //     let index = letters.indexOf(target);
    //     return letters[index + 1];
    // }

    for(let letter of letters){
        if(letter > target){
            return letter
        }
    }
    return letters[0];
};