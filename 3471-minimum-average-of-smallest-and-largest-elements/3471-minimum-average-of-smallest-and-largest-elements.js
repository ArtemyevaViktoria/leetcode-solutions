/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let averagesArr = [];

    nums.sort((a, b) => a - b);

    while(nums.length > 1) {
        let min = nums.shift();
        let max = nums.pop();

        let averageVl = (min + max) / 2;

        averagesArr.push(averageVl);
    }

    return Math.min(...averagesArr);
};