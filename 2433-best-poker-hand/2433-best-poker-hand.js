/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    if(suits.every((suit) => suit == suits[0])) {
        return "Flush"
    }; 

    let matchArr = [];

    for(let i = 0; i < ranks.length; i++) {
        let count = -1;
         for(let j = 0; j < ranks.length; j++) {
            if(ranks[i] === ranks[j]) {
                count++;
            }
         }
         matchArr.push(count);
    }

    if(Math.max(...matchArr) >= 2) {
        return "Three of a Kind";
    } 
    if(Math.max(...matchArr) == 1) {
        return "Pair";
    }

    return "High Card";
};