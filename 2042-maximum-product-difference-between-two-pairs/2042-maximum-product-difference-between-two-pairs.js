/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a, b) => b - a);

    let result = (nums[0] * nums[1]) - (nums[nums.length - 1] * nums[nums.length - 2]);
    
    return result;
};