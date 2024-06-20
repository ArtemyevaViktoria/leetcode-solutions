/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let arr = nums[0];
    let contains = [];

    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let flag = true;

        for(let i = 1; i < nums.length; i++) {
           if(!nums[i].includes(num)) {
             flag = false;
           }
        }

        if(flag) {
            contains.push(num);
        }
    }

    return contains.sort((a, b) => a - b)
};