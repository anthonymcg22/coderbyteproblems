//counts vowels in string
function VowelCount(str) {
    var vowels = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i"
            || str[i] === "o" || str[i] === "u") {
            vowels++;
        }
    }
    // code goes here  
    return vowels;

}
alert(VowelCount("How many vowels are in this sentence?"));