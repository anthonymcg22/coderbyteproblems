
// this function returns the total possible moves a knight can make from a given position on the chess board
//  given the x coordinate and y coordinate as a string like so "(1 5)"  (x coordinate is 1 and y coordinate is 5)
var KnightMoves = function (str) {

    var x = Number(str[1]);
    var y = Number(str[3]);
  
    // all posibilities for rows and columns 1 and 8
    if ((x === 1 || x === 8) && (y === 1 || y === 8)) {
        return 2; };
    if (((x === 1 || x === 8) && (y === 2 || y === 7)) || ((y === 1 || y === 8) && (x === 2 || x === 7)))
    { return 3; };
    if (((x === 1 || x == 8) && y >= 3 && y <= 6) || ((y === 1 || y == 8) && x >= 3 && x <= 6))
    { return 4; };
  
    //all posibilities for rows and columns 2 and 7
    if (((x === 2 || x === 7) && (y === 1 || y === 8)) || ((y === 2 || y === 7) && (x === 1 || x === 8)))
    { return 3; };
    if (((x === 2 || x === 7) && (y === 2 || y === 7)) || ((y === 2 || y === 7) && (x === 2 || x === 7)))
    { return 4; };
    if (((x === 2 | x === 7) && y >= 3 && y <= 6) || ((y === 2 | y === 7) && x >= 3 && x <= 6))
    { return 6; };
  
    //otherwise knight can move in all 8 positions
    return 8;
};

var answer = KnightMoves("(2 7)");
alert(answer);