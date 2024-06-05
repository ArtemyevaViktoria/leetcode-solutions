/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let first;
    let sec;
    let third; 

    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        first = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            if(first !== nums[j]) {
                sec = nums[j];

                for(let c = j + 1; c < nums.length; c++) {
                    if(first !== nums[c] && sec !== nums[c]) {
                        third = nums[c];
                        count++;
                    }
                }
             }
        }

        if (!third) {
            return 0;
        }
    }

    return count;
};