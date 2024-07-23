/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    while(s.includes('AB') || s.includes('CD')) {
        if(s.includes('AB')) {
            s = s.replaceAll('AB', '');
        } else {
            s = s.replaceAll('CD', '');
        }
    }

    return s.length;
};

