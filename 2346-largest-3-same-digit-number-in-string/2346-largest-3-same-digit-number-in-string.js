/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let result = '';

     for(let i = 0; i < num.length - 2; i++) {
        if(num[i] === num[i+1] && num[i] === num[i+2]) {
            if(result.length === 0) {
                result = `${num[i]}${num[i]}${num[i]}`;
            } else {
                if(result[0] < num[i]) {
                   result = `${num[i]}${num[i]}${num[i]}`; 
                }
            }
        }
    }  

    return result;
};