/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const words = sentence.split(" ")
    dictionary.sort((a, b) => a.length - b.length);

    const findRoot = (word)=>{
        for(let root of dictionary){
            if(word.startsWith(root)){
                return root;
            }
        }
        return word;
    }

    const result = words.map((word)=> findRoot(word))

    return result.join(" ")
};