/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    return cleanedString === cleanedString.split("").reverse().join("");
};