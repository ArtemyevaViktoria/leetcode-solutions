/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    let leftIndex;
    let rightIndex;

    while(left <= right) {
        const middle = Math.floor((left + right) / 2);

        if(nums[middle] === target) {
            return middle;
        }

        if(nums[middle] > target) {
            right = middle - 1;
            rightIndex = nums.findIndex((elem) => nums[middle] == elem);
        }

        if(nums[middle] < target) {
            left = middle + 1;
            leftIndex = nums.findIndex((elem) => nums[middle] == elem);
        }
    }

    if(leftIndex >= 0) {
        return leftIndex + 1;
    } else {
        return rightIndex;
    }
};