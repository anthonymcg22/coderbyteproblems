//capitalizes first letter of each word
function LetterCapitalize(str) {
    "use strict";
    var strArray = str.split(" ");   //split input into words
    for (var i = 0; i < strArray.length; i++) {
        //for each word, make it equal to first letter capitalized + rest of word (slice)
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
    }
    str = strArray.join(" ");
    return str;

}
alert(LetterCapitalize("here we go lower case time dog yo"));