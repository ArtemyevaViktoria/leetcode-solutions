/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort((a, b) => a - b);

    let index = nums.findIndex((vl) => vl >= k);

    return index;
};