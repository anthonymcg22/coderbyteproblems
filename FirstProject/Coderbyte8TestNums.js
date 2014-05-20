// return true if second number is bigger, return false if first number is bigger, if tie, return -1
function CheckNums(num1, num2) {
    if (num2 > num1) {
        return true;
    }
    else if (num1 > num2) {
        return false;
    }

    // code goes here  
    return "-1";

}
var answer = CheckNums(5, 7);
alert(answer);