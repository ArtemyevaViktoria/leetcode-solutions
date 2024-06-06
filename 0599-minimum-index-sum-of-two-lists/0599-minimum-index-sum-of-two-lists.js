/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let arr = [];

    for(let i = 0; i < list1.length; i++) {
        for(let j = 0; j < list2.length; j++) {
            if(list1[i] === list2[j]) {
                arr.push({indexSumm: i + j, value: list1[i]}); 
            }
        }
    }

    arr.sort((a, b) => a.indexSumm - b.indexSumm);

    if(arr.length > 1 && arr[0].indexSumm === arr[1].indexSumm) {
        let resultArr = [arr[0].value, arr[1].value];
        for(let i = 2; i < arr.length; i++) {
            if(arr[i].indexSumm === arr[1].indexSumm) {
                resultArr.push(arr[i].value);
            }
        }
        return resultArr;
    }
    
    return [arr[0].value];
};