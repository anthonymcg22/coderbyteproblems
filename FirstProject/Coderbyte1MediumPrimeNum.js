//tells if number is a prime number
function PrimeTime(num) {
    if (num === 1)
        return false;
    for (var i = 2; i <= num-1; i++) {
        if (num % i === 0)
            return "false";
    } 
    return "true";
}
var prime = PrimeTime(19);
alert(prime);