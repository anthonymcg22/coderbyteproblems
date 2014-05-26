// determines the position on a tic tac toe game to place eith X or O to win the game
// you input an array of 11 strings, each being "X"  "O" or "-"  
// the order of array elements corresponds with space on the board starting at row 1 column 1 and ending at row three column three 
function NoughtsDeterminer(strArr) {
    // all X for spot 0
    if (strArr[0] === "X" && strArr[1] === "X" && strArr[2] == "-")
        return 2;
    if (strArr[0] === "X" && strArr[5] === "X" && strArr[10] == "-")
        return 10;
    if (strArr[0] === "X" && strArr[4] === "X" && strArr[8] == "-")
        return 8;
    if (strArr[0] === "X" && strArr[1] === "-" && strArr[2] == "X")
        return 1;
    if (strArr[0] === "X" && strArr[5] === "-" && strArr[10] == "X")
        return 5;
    if (strArr[0] === "X" && strArr[4] === "-" && strArr[8] == "X")
        return 4;
    // all O for spot 0
    if (strArr[0] === "O" && strArr[1] === "O" && strArr[2] == "-")
        return 2;
    if (strArr[0] === "O" && strArr[5] === "O" && strArr[10] == "-")
        return 10;
    if (strArr[0] === "O" && strArr[4] === "O" && strArr[8] == "-")
        return 8;
    if (strArr[0] === "O" && strArr[1] === "-" && strArr[2] == "O")
        return 1;
    if (strArr[0] === "O" && strArr[5] === "-" && strArr[10] == "O")
        return 5;
    if (strArr[0] === "O" && strArr[4] === "-" && strArr[8] == "O")
        return 4;

    // all X for spot 1
    if (strArr[1] === "X" && strArr[2] === "X" && strArr[0] == "-")
        return 0;
    if (strArr[1] === "X" && strArr[5] === "X" && strArr[9] == "-")
        return 9;
    if (strArr[1] === "X" && strArr[9] === "X" && strArr[5] == "-")
        return 5;
    // all O for spot 1
    if (strArr[1] === "O" && strArr[2] === "O" && strArr[0] == "-")
        return 0;
    if (strArr[1] === "O" && strArr[5] === "O" && strArr[9] == "-")
        return 9;
    if (strArr[1] === "O" && strArr[9] === "O" && strArr[5] == "-")
        return 5;

    // all X for spot 2
    if (strArr[2] === "X" && strArr[5] === "X" && strArr[8] == "-")
        return 8;
    if (strArr[2] === "X" && strArr[8] === "X" && strArr[5] == "-")
        return 5;
    if (strArr[2] === "X" && strArr[6] === "X" && strArr[10] == "-")
        return 10;
    if (strArr[2] === "X" && strArr[10] === "X" && strArr[6] == "-")
        return 6;
    // all O for spot 2
    if (strArr[2] === "O" && strArr[5] === "O" && strArr[8] == "-")
        return 8;
    if (strArr[2] === "O" && strArr[8] === "O" && strArr[5] == "-")
        return 5;
    if (strArr[2] === "O" && strArr[6] === "O" && strArr[10] == "-")
        return 10;
    if (strArr[2] === "O" && strArr[10] === "O" && strArr[6] == "-")
        return 6;

    // all X for spot 4
    if (strArr[4] === "X" && strArr[8] === "X" && strArr[0] == "-")
        return 0;
    if (strArr[4] === "X" && strArr[5] === "X" && strArr[6] == "-")
        return 6;
    if (strArr[4] === "X" && strArr[6] === "X" && strArr[5] == "-")
        return 5;
    // all O for spot 4
    if (strArr[4] === "O" && strArr[8] === "O" && strArr[0] == "-")
        return 0;
    if (strArr[4] === "O" && strArr[5] === "O" && strArr[6] == "-")
        return 6;
    if (strArr[4] === "O" && strArr[6] === "O" && strArr[5] == "-")
        return 5;

    // all x for spot 5
    if (strArr[5] === "X" && strArr[9] === "X" && strArr[1] == "-")
        return 1;
    if (strArr[5] === "X" && strArr[6] === "X" && strArr[4] == "-")
        return 4;
    // all O for spot 5
    if (strArr[5] === "O" && strArr[9] === "O" && strArr[1] == "-")
        return 1;
    if (strArr[5] === "O" && strArr[6] === "O" && strArr[4] == "-")
        return 4;

    // all x for spot 6
    if (strArr[6] === "X" && strArr[10] === "X" && strArr[2] == "-")
        return 2;
    // all O for spot 6
    if (strArr[6] === "O" && strArr[10] === "O" && strArr[2] == "-")
        return 2;

    // all x for spot 8
    if (strArr[8] === "X" && strArr[9] === "X" && strArr[10] == "-")
        return 10;
    if (strArr[8] === "X" && strArr[10] === "X" && strArr[9] == "-")
        return 9;
    if (strArr[8] === "X" && strArr[5] === "X" && strArr[2] == "-")
        return 2;
    // all O for spot 8
    if (strArr[8] === "O" && strArr[9] === "O" && strArr[10] == "-")
        return 10;
    if (strArr[8] === "O" && strArr[10] === "O" && strArr[9] == "-")
        return 9;
    if (strArr[8] === "O" && strArr[5] === "O" && strArr[2] == "-")
        return 2;

    // all x for spot 9
    if (strArr[9] === "X" && strArr[10] === "X" && strArr[8] == "-")
        return 8;
    // all O for spot 9
    if (strArr[9] === "O" && strArr[10] === "O" && strArr[8] == "-")
        return 8;

    // code goes here  


}

var answer = NoughtsDeterminer(["-", "X", "-", "<>", "-", "X", "-", "<>", "-", "-", "O"]); //answer should be 9
alert(answer);