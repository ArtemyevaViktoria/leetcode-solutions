/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const alfMap = new Map();

    let result = '';

    for(let i = 0; i < alphabet.length; i++) {
        alfMap.set(i+1, alphabet[i]);
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i+2] === '#') {
            let vl = alfMap.get(Number(s[i]+s[i+1]));
            result = result.concat(vl);

            i = i+2;
        } else {
            let vl = alfMap.get(Number(s[i]));
            result = result.concat(vl);
        }
    }

    return result;
};