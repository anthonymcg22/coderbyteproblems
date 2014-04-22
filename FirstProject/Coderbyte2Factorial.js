"use strict";

function FirstFactorial(num) {
    var newNum = 1;
    for (var i = 1; i <= num; i++) {
        newNum *= i;
    }
    return newNum;
}
var answer = FirstFactorial(5);
console.log(answer);