/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let summMap = new Map();

    for(let i = 0; i < mat.length; i++) {
        let summ = mat[i].reduce((accum, currentVl) => accum + currentVl, 0);

        summMap.set(i, summ);
    }

    let sortMap = new Map([...summMap.entries()].sort((a, b) => a[1] - b[1]));

    let indexArr = [];

    for(let key of sortMap.keys()) {
        indexArr.push(key);
    }

    return indexArr.slice(0, k);
};