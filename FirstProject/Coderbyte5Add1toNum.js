function SimpleAdding(num) {
    var newNum = num;
    for (var i = 1; i < newNum; i++) {
        num += i;
    }
    return num;
}
var answer = SimpleAdding(1);
document.getElementById('answer').innerHTML = answer;