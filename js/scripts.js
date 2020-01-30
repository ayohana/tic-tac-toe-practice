// Business Logic
function Player(char) {
  this.char = char;
}

Player.prototype.mark = function() {
  return this.char;
}

function Board (){
  this.space1 = new Space(1, 1),
  this.space2 = new Space(1, 2),
  this.space3 = new Space(1, 3),
  this.space4 = new Space(2, 1),
  this.space5 = new Space(2, 2),
  this.space6 = new Space(2, 3),
  this.space7 = new Space(3, 1),
  this.space8 = new Space(3, 2),
  this.space9 = new Space(3, 3)
}

Board.prototype.findSpace = function(x, y){
  for (i=1; i<=9; i++){
    if (this[`space${i}`].xCoordinate === x && this[`space${i}`].yCoordinate === y){
      return this[`space${i}`];
    }
  }
}

Board.prototype.checkRow = function(){
  var row1 = this.space1.mark + this.space2.mark + this.space3.mark;
  var row2 = this.space4.mark + this.space5.mark + this.space6.mark;
  var row3 = this.space7.mark + this.space8.mark + this.space9.mark;
  if (row1.charAt(0) === row1.charAt(1) && row1.charAt(1) === row1.charAt(2)){
    return true;
  } else if (row2.charAt(0) === row2.charAt(1) && row2.charAt(1) === row2.charAt(2)) {
    return true;
  } else if (row3.charAt(0) === row3.charAt(1) && row3.charAt(1) === row3.charAt(2)) {
    return true;
  } else {
    return false;
  }
}


function Space (xCoordinate, yCoordinate){
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
}

Space.prototype.findxCoordinate = function(){
  return this.xCoordinate;
}

Space.prototype.findyCoordinate = function(){
  return this.yCoordinate;
}

Space.prototype.markWith = function(char){
  this.mark = char;
}

Space.prototype.markedBy = function(){
  return this.mark;
}



// User Interface Logic
var testPlayer = new Player("X");
console.log(testPlayer.mark());

var board = new Board();
console.log(board);
console.log(board.findSpace(1, 2));

var testSpace1 = board.findSpace(1, 1);
var testSpace2 = board.findSpace(1, 2);
var testSpace3 = board.findSpace(1, 3);

// console.log(testSpace.findxCoordinate());
// console.log(testSpace.findyCoordinate());

testSpace1.markWith(testPlayer.mark());
testSpace2.markWith(testPlayer.mark());
testSpace3.markWith(testPlayer.mark());
console.log(board.checkRow());
console.log(testSpace1.markedBy());
// console.log(testSpace);
// console.log(testSpace.markedBy());


$(document).ready(function(){
  $("#x1y1").click(function(){
    $("#x1y1").css({"background-color":"blue"});

  });
})