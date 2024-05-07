/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
   let elementSum = nums.reduce((accum, current) => {
        return accum + current;
    }, 0);
    
    let newArr = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 9) {
            let s = nums[i].toString();
            for(let i = 0; i < s.length; i++) {
                newArr.push(Number(s[i]));
            }
        } else {
            newArr.push(nums[i]);
        }
    }
    
    let digitSum = newArr.reduce((accum, current) => {
        return accum + current;
    }, 0); 

    return elementSum - digitSum;
};