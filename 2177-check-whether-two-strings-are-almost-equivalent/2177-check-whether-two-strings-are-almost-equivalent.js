/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let arr = new Array(26).fill(0);

    for(let i = 0; i < word1.length; i++) {
        let index = word1[i].charCodeAt(0) - 97; 

        arr[index]++; 
    }

    for(let j = 0; j < word2.length; j++) {
        let index = word2[j].charCodeAt(0) - 97; 

        arr[index]--; 
    }

    for(let i = 0; i < arr.length; i++) {
        if(Math.abs(arr[i]) > 3) {
            return false;
        }
    }

    return true;
};