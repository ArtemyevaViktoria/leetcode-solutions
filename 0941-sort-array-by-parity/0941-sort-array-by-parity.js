/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    function sortEvenOdd(a) {
        if(a % 2 === 0) {
            return -1;
        }
        if(a % 2 !== 0) {
            return 1;
        }
    }

    return nums.sort(sortEvenOdd);
};