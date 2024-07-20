/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b));

    let result = nums.map((item) => item * item);

    return result;
};