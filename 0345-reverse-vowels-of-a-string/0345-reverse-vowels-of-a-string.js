/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let currentVowOrder = [];

    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
           currentVowOrder.push(s[i]);
        }
    }

    let reverseVow = currentVowOrder.reverse();

    let result = '';
    
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
           result = result + reverseVow[count];
           count++;
        } else {
           result = result + s[i];
        }
    }

    return result;
};