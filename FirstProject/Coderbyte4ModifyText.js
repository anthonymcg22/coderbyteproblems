//replace every letter with the letter following it in the alphabet, then capitalize all vowels
"use strict";
var LetterChanges = function(str) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"
     , "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];  //stops short of Z
    str = str.toLowerCase();
    var letters = str.split("");
    for (var i = 0; i < letters.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {  //nested for loop to go through input and to go through alphabet array
            if (letters[i] === alphabet[j]) {
                letters[i] = alphabet[j + 1];   //changing letter
                break;
            }
            else if (letters[i] === "z") {   //if z change to capital A
                letters[i] = "A";
                break;
            }
        }
    }
    for (i = 0; i < letters.length; i++) {  //going through to change lower case vowels to uppercase
        switch (letters[i]) {
            case "e":
                letters[i] = "E";
                break;
            case "i":
                letters[i] = "I";
                break;
            case "o":
                letters[i] = "O";
                break;
            case "u":
                letters[i] = "U";
                break;
        }
    }
 
    str = letters.join("");
    return str;

}
alert(LetterChanges("Change these letters!"));
