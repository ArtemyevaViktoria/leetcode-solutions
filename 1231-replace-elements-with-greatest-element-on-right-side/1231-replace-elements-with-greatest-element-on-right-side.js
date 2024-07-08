/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = [-1];

    let currentMax = 0;

    for(let i = arr.length - 2; i >= 0; i--) {
        if(arr[i + 1] > currentMax) {
            currentMax = arr[i + 1];
        }

        result.unshift(currentMax);
    } 

    return result;
};