/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let mergeArr = [...items1, ...items2];
    let result = [];

    mergeArr.sort((a,b) => a[0] - b[0]);

    for(let i = 0; i < mergeArr.length; ) {
      if(!mergeArr[i+1]) {
        result.push([mergeArr[i][0], mergeArr[i][1]]);
        break;
      }

      if(mergeArr[i][0] === mergeArr[i+1][0]) {
        result.push([mergeArr[i][0], mergeArr[i][1] + mergeArr[i+1][1]]);
        i = i + 2;
      } else {
        result.push([mergeArr[i][0], mergeArr[i][1]]);
        i = i + 1;
      }
    }

    return result;
};