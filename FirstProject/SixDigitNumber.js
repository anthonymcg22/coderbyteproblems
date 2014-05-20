var SixDigitNumber = function () {
    for (var i = 100000; i < 1000000; i++) {
        if ((i*4).toString() === i.toString().split("").reverse().join("")) {
            document.getElementById("answer").innerHTML = i;
            break;
        }
    }
};
var hide = function () {
    document.getElementById("answer").innerHTML = "";
};
var showSource = function () {
    document.getElementById("explanation").innerHTML = '<em>' + SixDigitNumber + '</em>';
};
var hideSource = function () {
    document.getElementById("explanation").innerHTML = "";
};