/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let sum = 0;

    for(let i = 0; i < k; i++) {
        let max = Math.max(...nums);
        sum += max;

        let ind = nums.findIndex((vl) => vl == max);

        nums.splice(ind, 1, nums[ind]+1);
    }

    return sum;
};