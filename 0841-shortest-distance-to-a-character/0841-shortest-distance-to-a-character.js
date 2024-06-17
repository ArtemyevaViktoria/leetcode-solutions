/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let arrEqualIndex = [];
    let result = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) {
            arrEqualIndex.push(i);
        } 
    }
    
    for(let i = 0; i < s.length; i++) {
        let a = Math.abs(i - arrEqualIndex[0]); 
        
        for(let j = 1; j < arrEqualIndex.length; j++) {
            if(Math.abs(i - arrEqualIndex[j]) < a) {
                a = Math.abs(i - arrEqualIndex[j])
            }
        }
        
        result.push(a);
    }
    
    return result;
};