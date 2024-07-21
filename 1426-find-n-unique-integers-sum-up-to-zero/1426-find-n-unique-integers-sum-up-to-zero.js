/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = [];

    let positive = 0;
    let negative = 0;

    if(n % 2 !== 0) {
        arr.push(0);
    }

    while(arr.length < n) {
        arr.push(++positive, --negative);
    }

    return arr;
};