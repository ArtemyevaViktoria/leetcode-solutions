/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    let collection = new Set(); 

    for(let i = 0; i < words.length; i++) {
        let morseWord = '';

        for(let j = 0; j < words[i].length; j++) {
            let index = alphabet.findIndex((vl) => vl === words[i][j]);

            morseWord = morseWord.concat(morseAlphabet[index]);
        }

        collection.add(morseWord); 
    }

    return collection.size;
};