var lengthOfLastWord = function(str) {
    newStr = str.trim().split(" ")
    
    let len = newStr.length;
    let lastWord = newStr[len-1]
    console.log(lastWord.length);
    
    
};


s = "   fly me   to   the moon  ";
lengthOfLastWord(s)