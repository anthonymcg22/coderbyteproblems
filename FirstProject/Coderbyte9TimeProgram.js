//converts amount of minutes into the format--- 'hours' : 'minutes'
function TimeConvert(num) {
    var minutes = num % 60;
    var hours = (num - minutes) / 60;
    return hours + ":" + minutes;
}
var answer = TimeConvert(145);
alert(answer); 