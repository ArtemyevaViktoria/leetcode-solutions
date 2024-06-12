/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let arr = []; 
    let summArr = [];

    for(let i = 0; i < nums.length; i++) {
        for(let j = 1 + i; j < nums.length; j++) {
            for(let k = 1 + j; k < nums.length; k++) {
                if(nums[i] < nums[j] && nums[k] < nums[j]) {
                    arr.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    arr.forEach((item) => summArr.push(item[0] + item[1] + item[2]));

    if(summArr.length > 0) {
       return Math.min(...summArr);
    }

    return -1;
};