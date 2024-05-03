/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let isMostCandies = [];

    let maxCandies = Math.max(...candies);

    candies.forEach((candiesNow) => {
        candiesNow + extraCandies >= maxCandies ? 
        isMostCandies.push(true) : 
        isMostCandies.push (false)
    });

    return isMostCandies;
};