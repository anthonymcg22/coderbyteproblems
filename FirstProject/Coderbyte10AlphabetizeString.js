function AlphabetSoup(str) {
    str = str.toLowerCase().split("").sort().join(""); //make lowecase, split into array, sort, join back into a string
    // code goes here  
    return str;

}
var answer = AlphabetSoup("Sort this homey soup dog");
alert(answer);