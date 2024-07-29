/**
 * @param {string[]} words
 * @return {string[]}
 */

const firstRow = 'qwertyuiop';
const secondRow = 'asdfghjkl';
const thirdRow = 'zxcvbnm'; 

var findWords = function(words) {
    let result = [];

    let lowerArr = words.map(item => item.toLowerCase());

    lowerArr.forEach((item, index) => {
        let currentRow = findCurrentRow(item[0]);
        let flag = true;

        for(let i = 1; i < item.length; i++) {
            if(!currentRow.includes(item.charAt(i))) {
                flag = false;
            }
        }

        if(flag) {
            result.push(words[index]);
        }
    });

    return result;
};

function findCurrentRow(letter) {
    if(firstRow.includes(letter)) {
        return firstRow;
    } else if (secondRow.includes(letter)) {
        return secondRow;
    } else {
        return thirdRow;
    }    
}; 