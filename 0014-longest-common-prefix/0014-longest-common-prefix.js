/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix = ""
    const str = strs[0] //flower

    for(let i=0; i <= str.length; i++){
        const pre = prefix + str[i];
        for(words of strs){
            if(!words.startsWith(pre)){
                return prefix
            }
        }
        prefix = prefix + str[i]
        // console.log("",prefix)
    }
    return prefix

};