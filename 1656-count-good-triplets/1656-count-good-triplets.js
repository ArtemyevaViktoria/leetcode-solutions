/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 1 + i; j < arr.length; j++) {
            for(let k = 1 + j; k < arr.length; k++) {
                let d = Math.abs(arr[i] - arr[j]);
                let f = Math.abs(arr[j] - arr[k]);
                let m = Math.abs(arr[i] - arr[k]);

                if(d <= a && f <= b && m <= c) {
                    count++;
                }
            }
        }
    }

    return count; 
};