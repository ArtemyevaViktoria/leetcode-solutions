/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // use spread syntax
    let ans = [...nums, ...nums];

    return ans;
};