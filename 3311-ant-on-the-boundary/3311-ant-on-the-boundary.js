/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let count = 0;

    nums.reduce((currentVl, accum) => {
        if(currentVl + accum === 0) {
            count++;
        }

        return currentVl + accum;
    }, 0);

    return count;
};