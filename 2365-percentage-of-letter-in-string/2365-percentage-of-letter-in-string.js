/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = 0;

    for(let strLetter of s) {
        if(strLetter === letter) {
            count++;
        }
    }

    if(count === 0) {
        return 0;
    }
 
    return Math.floor(count / s.length * 100);
};