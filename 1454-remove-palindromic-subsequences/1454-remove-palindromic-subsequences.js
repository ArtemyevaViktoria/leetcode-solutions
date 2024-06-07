/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    let count = 0;
    
    s.split('').reverse().join('') === s ? count = 1 : count = 2;

    return count;
};