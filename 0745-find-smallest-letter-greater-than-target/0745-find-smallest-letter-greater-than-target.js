/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let strLetters = letters.join('');
    let charCodeTarget = target.charCodeAt(0);

    for(let j of strLetters) {
        if(charCodeTarget < j.charCodeAt(0)) {
            return j;
        } 
    }

    return strLetters[0];
};