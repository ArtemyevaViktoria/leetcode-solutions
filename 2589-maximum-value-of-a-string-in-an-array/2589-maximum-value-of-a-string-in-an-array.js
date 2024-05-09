/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let strsValues = [];
    
    for(let i = 0; i < strs.length; i++) {
        if(Number(strs[i]) || Number(strs[i]) === 0) {
            strsValues.push(Number(strs[i]));
        } else {
            strsValues.push(strs[i].length);
        }
    }

    return Math.max(...strsValues);
};