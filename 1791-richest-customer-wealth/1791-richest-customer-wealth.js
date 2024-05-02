/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let currentMaxSumm = 0;

    accounts.forEach((arr) => {
        let sum = arr.reduce((sum, current) => {
           return sum + current
        }, 0);
        if (sum > currentMaxSumm) {
            currentMaxSumm = sum;
        }
    })

    return currentMaxSumm;
};