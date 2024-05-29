/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;

    for(let i = 0; i < words.length; i++) {
        let isIncludes = true;

        for(let j = 0; j < words[i].length; j++) {
            if(!allowed.includes(words[i].charAt(j))) {
                isIncludes = false;
            }
        }

        if(isIncludes) {
            count++;
        } 
    }

    return count;
};