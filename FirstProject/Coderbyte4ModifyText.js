function LetterChanges(str) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"
     , "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    str = str.toLowerCase();
    var letters = str.split("");
    for (var i = 0; i < letters.length; i++) {
        for (var j = 0; j < alphabet.length - 1; j++) {
            if (letters[i] === alphabet[j]) {
                letters[i] = alphabet[j + 1];
                break;
            }
            else if (letters[i] === "z") {
                letters[i] = "A";
                break;
            }
        }
    }
    for (i = 0; i < letters.length; i++) {
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
console.log(LetterChanges("Will I succeed at camp?"));
