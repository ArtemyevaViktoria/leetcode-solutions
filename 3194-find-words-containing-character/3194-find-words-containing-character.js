/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let wordsIncludesXIndex = []; 

    words.forEach((word, index) => {
        if(word.includes(x)) {
            wordsIncludesXIndex.push(index); 
        }
    });

    return wordsIncludesXIndex; 
};