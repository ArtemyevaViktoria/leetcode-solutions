/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    let currentTimeArr = current.split(":");
    let correctTimeArr = correct.split(":");

    let diffMinutes = ((Number(correctTimeArr[0]) - Number(currentTimeArr[0])) * 60) + 
    Number(correctTimeArr[1]) - Number(currentTimeArr[1]);  

    let minutesArr = [60, 15, 5, 1];

    let count = 0;

    function diffMinutesHelper() {
        if(diffMinutes === 0) {
            return count;
        }

        if(diffMinutes - minutesArr[0] < 0) {
            minutesArr.shift();
            return diffMinutesHelper();
        } else {
            diffMinutes = diffMinutes - minutesArr[0];
            count++;
            return diffMinutesHelper();
        }
    }

    return diffMinutesHelper();
};