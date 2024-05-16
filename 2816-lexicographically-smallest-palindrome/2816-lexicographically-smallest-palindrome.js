/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let arr = s.split('');

    for(let i = 0, j = arr.length - 1 - i; i < Math.floor(arr.length / 2); i++, j--) {
        if(arr[i] !== arr[j]) {
            arr[i] < arr[j] ? 
            arr[j] = arr[i] :
            arr[i] = arr[j]; 
        }
    } 

    return arr.join('');
};