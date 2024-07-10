/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let currentStr = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'i') {
            currentStr = currentStr.split('').reverse().join('');
        } else {
            currentStr = currentStr.concat(s[i]);
        }
    }

    return currentStr;
};