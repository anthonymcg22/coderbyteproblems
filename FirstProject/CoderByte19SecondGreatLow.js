//return second lowest and second greatest number in array
function SecondGreatLow(arr) {
    var Big = 0;
    var Big2 = 0;
    var small = 0;
    var small2 = 0;
    var locate;
    for (var i = 0; i < arr.length; i++) {
        if (Big < arr[i]) {
            Big = arr[i];
            locate = i;
        }
    }
    arr.splice(locate, 1);
    for (var i = 0; i < arr.length; i++) {
        if (Big2 <= arr[i]) {
            Big2 = arr[i];
        }
    }
    arr.splice(locate, 0, Big);
    small = Big;
    small2 = Big;
    for (var i = 0; i < arr.length; i++) {
        if (small > arr[i]) {
            small = arr[i];
            locate = i;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (small2 >= arr[i] && arr[i] > small) {
            small2 = arr[i];
        }
    }

    return small2 + " " + Big2;

}
alert(SecondGreatLow([2, 2, 2, 5, 5, 5, 6]));