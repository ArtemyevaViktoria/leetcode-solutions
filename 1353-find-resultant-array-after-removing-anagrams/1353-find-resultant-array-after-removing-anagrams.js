/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    for(let i = 1; i < words.length;) {
        let a = words[i].split('').sort().join();
        let b = words[i-1].split('').sort().join();

        a === b ? words.splice(i, 1) : i++;
    }

    return words;
};