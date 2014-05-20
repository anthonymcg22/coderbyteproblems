//if "a" is separated by exactly three places from "b" return true
function ABCheck(str) {
    for (var i = 0; i < str.length - 4; i++) {
        if (str[i] === "a" && str[i + 4] === "b") {
            return true;
            break;
        }
    }
    return false;
}
var answer = ABCheck("Hi this is an antibacterial soap.");
alert(answer);