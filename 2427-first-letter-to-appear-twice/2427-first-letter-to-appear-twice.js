/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let recordVal = '';

    for(let i = 0; i < s.length; i++) {
        if(recordVal.includes(s[i])) {
            return s[i];
        }

        recordVal = recordVal.concat(s[i]);
    }
};