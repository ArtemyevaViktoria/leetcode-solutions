/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let alf = alphabet.split('');
    let s = sentence.split('');

    if(s.length < alf.length) {
        return false;
    }

    for(let i = 0; i < alf.length; i++) {
        if(!s.includes(alf[i])) {
            return false;
        }
    }

    return true;
};