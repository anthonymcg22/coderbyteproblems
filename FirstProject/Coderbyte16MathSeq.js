//
function ArithGeo(arr) {
    var AP = arr[1] - arr[0];
    var GP = arr[1] / arr[0];
    var arith;
    var geom;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== AP) {
            arith = false;
        }
        if (arr[i] / arr[i - 1] !== GP) {
            geom = false;
        }
    }
    if (arith === false && geom === false) {
        return -1;
    }
    else if (arith !== false) {
        return "Arithmetic";
    }
    return "Geometric";
}
var answer = ArithGeo([3, 6, 9, 12, 15]);
alert(answer);