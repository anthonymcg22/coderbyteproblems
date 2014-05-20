//returns how many words are in the sentence
function WordCount(str) {
    str = str.split(" ");
    return str.length;

}
var answer = WordCount("How many words are in this very sentence?");
alert(answer);