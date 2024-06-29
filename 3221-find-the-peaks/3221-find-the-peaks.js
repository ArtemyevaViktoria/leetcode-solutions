/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let peakIndex = [];

    for(let i = 1; i < mountain.length - 1; i++) {
        if(mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
            peakIndex.push(i);
        }
    }

    return peakIndex;
};