/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let nums1IndexCount = 0;
    let nums2IndexCount = 0;

    for(let i = 0; i < nums1.length; i++) {
        if(nums2.includes(nums1[i])) {
            nums1IndexCount++;
        }
    }

    for(let i = 0; i < nums2.length; i++) {
        if(nums1.includes(nums2[i])) {
            nums2IndexCount++;
        }
    }

    return [nums1IndexCount, nums2IndexCount]
};