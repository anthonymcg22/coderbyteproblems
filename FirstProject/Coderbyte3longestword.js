//returns longest word of your input
"use strict";
var LongestWord = function (sen) {
    "use strict";
    var test = sen.split(" "); //test is now a array with words separated by a space
    var longest = "a";
    for (var i in test) {
        test[i] = test[i].replace(/\W/g, '');   //getting rid of non-alpha-numeric characters
    }
    for (var i = 0; i < test.length; i++) {
        if (longest.length < test[i].length) {   
            longest = test[i];         //if longest is shorter than any of the words, it becomes that word
        }
    }
    return longest;
}
var answer = LongestWord("Don't stop that mountaineer sliding over the river");
alert(answer);