function LongestWord(sen) {
    var test = sen.split(" ");
    var longest = "a";
    for (var i in test) {
        test[i] = test[i].replace(/\W/g, '');
    }
    for (var i = 0; i < test.length; i++) {
        if (longest.length < test[i].length) {
            longest = test[i];
        }
    }
    return longest;
}




var answer = LongestWord("Don't stop that lightning over the river");
console.log(answer);