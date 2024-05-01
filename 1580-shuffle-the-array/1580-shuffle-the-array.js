/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let mergeArr = [];

    for(let i = 0; i < n; i++) {
        mergeArr.push(nums[i], nums[n+i]);
    }

    return mergeArr;
};