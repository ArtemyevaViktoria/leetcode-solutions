/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    let num1 = '';
    let num2 = '';

    let arr = num.toString().split('').sort((a, b) => a - b);

    for(let i = 0; i < arr.length; ) {
        num1 += arr[i];
        num2 += arr[i+1] || '';

        i = i + 2;
    }

    return Number(num1) + Number(num2);
};