/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let acronymStr = '';

    for(let i = 0; i < words.length; i++) {
        acronymStr += words[i].charAt(0);
    }

    return acronymStr === s;
};