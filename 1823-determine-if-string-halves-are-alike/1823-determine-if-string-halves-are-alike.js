/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = 'aeiouAEIOU';

    let a = s.slice(0, s.length / 2);
    let b = s.slice(s.length / 2, s.length);

    let aCount = 0;
    let bCount = 0;

    for(let i = 0; i < a.length; i++) {
        if(vowels.includes(a[i])) {
            aCount++;
        }
    }
    for(let i = 0; i < b.length; i++) {
        if(vowels.includes(b[i])) {
            bCount++;
        }
    }

    if(aCount === bCount) {
        return true;
    } 

    return false; 
};