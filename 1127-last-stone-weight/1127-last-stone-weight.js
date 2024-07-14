/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        let diff = 0;

        stones.sort((a, b) => a - b);

        if(stones[stones.length-1] - stones[stones.length-2] !== 0) {
            diff = stones[stones.length-1] - stones[stones.length-2];
        }

        stones.pop();
        stones.pop();

        if(diff !== 0) {
            stones.push(diff);
        }
    }

    return stones[0] ? stones[0] : 0;
};