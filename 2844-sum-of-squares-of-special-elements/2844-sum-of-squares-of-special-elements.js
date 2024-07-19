/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let arr = [];

    for(let i = 0; i < nums.length; i++) {
        if(nums.length % (i+1) === 0) {
            arr.push(nums[i] * nums[i]);
        }
    }

    let summ = arr.reduce((accum, currentVl) =>  accum + currentVl, 0);

    return summ;
};