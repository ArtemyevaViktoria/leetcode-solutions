/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let arr = [];
    let result = [];

    for(let i = 0; i < names.length; i++) {
        arr.push([names[i], heights[i]]);
    }

    arr.sort((a, b) => b[1] - a[1]);

    arr.forEach((item) => result.push(item[0]));

    return result;
};