//sees if input is spelled same way forward as backward
function Palindrome(str) {
    str = str.split(" ").join("");
    var reverse = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    if (reverse === str) {
        return true;
    }
    // code goes here  
    return false;

}
var answer = Palindrome("race car");
alert(answer);