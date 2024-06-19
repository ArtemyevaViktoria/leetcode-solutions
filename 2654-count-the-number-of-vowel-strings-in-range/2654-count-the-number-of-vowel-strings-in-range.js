/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for(let i = left; i <= right; i++) {
        let firstLetter = words[i][0];
        let lastLetter = words[i][words[i].length-1];

        if(vowel.includes(firstLetter) && vowel.includes(lastLetter)) {
            count++;
        }
    }

    return count;
};