/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let result = [];

    image.forEach((item) => {
        let rev = item.reverse();

        for(let i = 0; i < rev.length; i++) {
            if(rev[i] === 0) {
               rev[i] = 1;
            } else {
               rev[i] = 0;
            }
        } 

        result.push(rev);       
    });    

    return result;
};