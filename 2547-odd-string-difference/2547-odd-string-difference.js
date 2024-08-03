/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    let differenceArr = [];

    for(let i = 0; i < words.length; i++) {
        let difference = [];

        for(let j = 0; j < words[i].length - 1; j++) {
            difference.push(words[i][j + 1].charCodeAt() - words[i][j].charCodeAt());
        } 

        differenceArr.push(difference);
    }

    let equalArraysIndex = [];

    let baseVl = JSON.stringify(differenceArr[0]);

    for(let i = 1; i < differenceArr.length; i++) {
        if(baseVl === JSON.stringify(differenceArr[i])) {
           equalArraysIndex.push(i);
        }
    }

    if(equalArraysIndex.length === 0) {
        return words[0];
    }

    for(let i = 1; i < differenceArr.length; i++) {
        if(!equalArraysIndex.includes(i)) {
            return words[i];
        }
    }
};