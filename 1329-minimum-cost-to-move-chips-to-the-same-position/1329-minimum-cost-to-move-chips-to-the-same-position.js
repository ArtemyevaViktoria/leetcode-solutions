/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let evenCount = 0;
    let oddCount = 0;

    position.forEach((item) => {
        if(item % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    });

    return evenCount > oddCount ? oddCount : evenCount;
};