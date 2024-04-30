/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;

    operations.map((str) => {
        if(str.startsWith("--") || str.endsWith("--")) {
            x--;
        } 
        if(str.startsWith("++") || str.endsWith("++")) {
            x++;
        }
    })

    return x;
};