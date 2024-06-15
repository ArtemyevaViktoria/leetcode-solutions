/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let arr = nums.filter((vl) => nums.indexOf(vl) === nums.lastIndexOf(vl));

    let result = arr.reduce((accum, currentVl) => accum + currentVl, 0);

    return result;
};




