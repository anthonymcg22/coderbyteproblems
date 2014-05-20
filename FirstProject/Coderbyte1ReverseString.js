// program that outputs the reversed string of the input string
"use strict";
var FirstReverse = function (str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
var answer = FirstReverse("I got a job interview");
alert(answer);