//adds up all numbers from 1 to num
"use strict";
var SimpleAdding = function (num) {
    var newNum = num;          // making variable equal to input
    for (var i = 1; i < newNum; i++) {
        num += i;         //adding every number starting at one to the input stopping before it adds the original number
    }
    return num;
}
var answer = SimpleAdding(4);
alert(answer);