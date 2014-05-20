//determine factorial of a given number
"use strict";
var FirstFactorial = function (num) {
    "use strict";
    var newNum = 1;
    for (var i = 1; i <= num; i++) {
        newNum *= i;
    }
    return newNum;
}
var answer = FirstFactorial(5);
alert(answer);