//see if there are an equal number of x's and o's in input
function ExOh(str) {
    "use strict";
    var x = 0;
    var o = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            x++;
        }
        if (str[i] === "o") {
            o++;
        }
    }
    if (x === o)
        return true;
    else
        return false;
};
var answer = ExOh("xooxxoxxooo");
alert(answer);