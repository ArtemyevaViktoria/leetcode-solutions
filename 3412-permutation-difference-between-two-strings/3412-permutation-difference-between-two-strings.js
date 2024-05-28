/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let permutationDiff = 0;

    for(let i = 0; i < s.length; i++) {
        let index = t.indexOf(s[i]);
        permutationDiff += Math.abs(i - index);
    }

    return permutationDiff;
};