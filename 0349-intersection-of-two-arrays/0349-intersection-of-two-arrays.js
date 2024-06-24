/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let firstSet = new Set([...nums1]);
    let secSet = new Set([...nums2]);

    let result = [];

    for(let vl of firstSet) {
        if(secSet.has(vl)) {
            result.push(vl);
        }
    }

    return result;
};