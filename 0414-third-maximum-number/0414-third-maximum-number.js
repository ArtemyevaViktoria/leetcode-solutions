/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = Array.from(new Set(nums));

    nums.sort((a, b) => a - b);

    if(nums.length < 3) {
        return Math.max(...nums);
    }

    return nums[nums.length - 3];
};