/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */

var kthDistinct = function(arr, k) {
    let filterArr = arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));

    return filterArr[k-1] ? filterArr[k-1] : '';
};