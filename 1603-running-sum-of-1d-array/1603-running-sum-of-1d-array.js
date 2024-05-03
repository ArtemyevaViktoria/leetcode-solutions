/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sumFirstIndexArr = [];

    nums.reduce((accumulator, currentValue) => {
        let sum = accumulator + currentValue;
        sumFirstIndexArr.push(sum);
        return sum;
    }, 0)

    return sumFirstIndexArr;
};