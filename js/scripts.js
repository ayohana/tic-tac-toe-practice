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

var testSpace = board.findSpace(1, 2);

console.log(testSpace.findxCoordinate());
console.log(testSpace.findyCoordinate());

testSpace.markWith(testPlayer.mark());
console.log(testSpace);
console.log(testSpace.markedBy());


$(document).ready(function(){
  $("#x1y1").click(function(){
    $("#x1y1").css({"background-color":"blue"});

  });
})