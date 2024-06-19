/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let alphIndex = new Map();

    for(let i = 0; i < alph.length; i++) {
        alphIndex.set(i, alph[i]);
    }

    for(let i = 0; i < distance.length; i++) {
        let letter = alphIndex.get(i);

        if(s.includes(letter)) {
            let first = s.indexOf(letter);
            let last = s.lastIndexOf(letter);

            let count = 0;
            for(let i = last-1; i > first; i--) {
                count++;
            }

            if(count !== distance[i]) {
                return false;
            }
        }
    }

    return true;
};