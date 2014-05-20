//checks if each letter in input is surrounded by a "+" symbol
"use strict";
function SimpleSymbols(str) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"
                    , "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
            if (str[i] === alphabet[j] && (str[i - 1] !== "+" || str[i + 1] !== "+")) {
                str = "false";
                break;
            }
        }
    }
    if (str !== "false") {
        str = "true";
    }
    // code goes here  
    return str;

}

var answer = SimpleSymbols("+c++=+=+a++==e+===");
alert(answer);