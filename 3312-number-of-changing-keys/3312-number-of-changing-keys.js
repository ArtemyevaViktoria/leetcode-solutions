/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
   let low = s.toLowerCase();

   let count = 0;

   for(let i = 0; i < s.length - 1; i++) {
    if(low[i] !== low[i+1]) {
        count++;
    }
   }

   return count;
};