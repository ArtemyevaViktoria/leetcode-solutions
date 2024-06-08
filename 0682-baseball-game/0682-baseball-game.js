/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = [];

    function add(x) {
        arr.push(Number(x));
    }

    function removePreviousValue() {
        arr.pop();
    }

    function addDoubledValue() {
        arr.push(arr[arr.length - 1] * 2);
    }

    function addSummTwoPreviousValue() {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }

    operations.forEach((item) => {
        if(Number.isInteger(Number(item))) {
            add(item);
        }
        if(item === 'C') {
            removePreviousValue();
        }
        if(item === 'D') {
            addDoubledValue(); 
        }
        if(item === '+') {
            addSummTwoPreviousValue();
        }
    });

    return arr.reduce((accum, item) => accum + item, 0);
};