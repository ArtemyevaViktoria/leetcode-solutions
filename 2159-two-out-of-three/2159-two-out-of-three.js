/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let uniqueVl = new Set();

    nums1.forEach((item) => {
        if([...nums2, ...nums3].includes(item)) {
            uniqueVl.add(item);
        }
    }); 

    nums2.forEach((item) => {
        if([...nums1, ...nums3].includes(item)) {
            uniqueVl.add(item);
        }
    });
    
    nums3.forEach((item) => {
        if([...nums1, ...nums2].includes(item)) {
            uniqueVl.add(item);
        }
    });     

    return Array.from(uniqueVl);
};