/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let arr = [];

    sentences.forEach((item) => {
        let arrFromStr = item.split(' ');
        arr.push(arrFromStr.length); 
    })

    return Math.max(...arr)
};