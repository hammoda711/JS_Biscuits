/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    let sum = 0;
    let n = 1;
    if (nums.length >= 1) {
        for (let num of nums) { //we use rest parameter and for ..of 
            sum = sum + num;
        }
        n = nums.length;
        let avg = sum / n;
        return avg;
    }
    else return 0;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average()); // we use if to make sure that output of case of no argument will not be NaN
