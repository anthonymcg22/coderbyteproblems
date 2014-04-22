// JavaScript source code
function FirstReverse(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
var answer = FirstReverse("Reverse this sentence please");
console.log(answer);