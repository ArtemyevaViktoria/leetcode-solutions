/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);

    let set2 = new Set(nums2);

    for(let vl of set1) {
        if(set2.has(vl)) {
            set1.delete(vl);
            set2.delete(vl);
        }
    }

    return [Array.from(set1), Array.from(set2)];
};