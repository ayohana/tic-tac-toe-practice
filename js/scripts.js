// Business Logic

// Player Constructor --------------------------
function Player(char, status) {
  this.char = char;
  this.status = status;
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

// Board Constructor --------------------------
Board.prototype.findSpace = function(x, y){
  for (var i=1; i<=9; i++){
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

Board.prototype.checkColumn = function(){
  var col1 = this.space1.mark + this.space4.mark + this.space7.mark;
  var col2 = this.space2.mark + this.space5.mark + this.space8.mark;
  var col3 = this.space3.mark + this.space6.mark + this.space9.mark;
  if (col1.charAt(0) === col1.charAt(1) && col1.charAt(1) === col1.charAt(2)){
    return true;
  } else if (col2.charAt(0) === col2.charAt(1) && col2.charAt(1) === col2.charAt(2)) {
    return true;
  } else if (col3.charAt(0) === col3.charAt(1) && col3.charAt(1) === col3.charAt(2)) {
    return true;
  } else {
    return false;
  }
}

Board.prototype.checkDiagonal = function(){
  var diag1 = this.space1.mark + this.space5.mark + this.space9.mark;
  var diag2 = this.space3.mark + this.space5.mark + this.space7.mark;
  if (diag1.charAt(0) === diag1.charAt(1) && diag1.charAt(1) === diag1.charAt(2)){
    return true;
  } else if (diag2.charAt(0) === diag2.charAt(1) && diag2.charAt(1) === diag2.charAt(2)) {
    return true;
  } else {
    return false;
  }
}

// Space Constructor --------------------------
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

// Game Constructor --------------------------
function Game() {
  this.player1 = new Player("X", true);
  this.player2 = new Player("O", false);
  this.board = new Board();
}

Game.prototype.changeStatus = function(){
  if (this.player1.status){
    this.player1.status = false;
    this.player2.status = true;
  } else {
    this.player1.status = true;
    this.player2.status = false;
  }
  console.log(this.player1)
  console.log(this.player2)
}

var game = new Game();


// User Interface Logic


//     testSpace1.markWith(testPlayer2.mark());
//   ($("div#space2").on("click", function()){
//   });
//   $("div#space3").on("click", function(){
//   });
//   $("div#space4").on("click", function(){
//     console.log("hello");
//   });
//   $("div#space5").on("click", function(){
//     console.log("hello");
//   });
//   $("div#space6").on("click", function(){
//     console.log("hello");
//   });
//   $("div#space7").on("click", function(){
//     console.log("hello");
//   });
//   $("div#space8").on("click", function(){
//     console.log("hello");
//   });
//   $("div#space9").on("click", function(){
//     console.log("hello");
//   });
// }



$(document).ready(function(){
  $("div#space1").click(function(event){
    event.preventDefault;
    game.changeStatus();
    game.board.space1.markWith(game.player1.mark())
    console.log(game.board.space1);
  });
})

// Further Exploration:
// Make players able to choose if they want to play X or O
// Game.prototype.makeChoice{
//   player1
//   if player.choiceX === 
//   player = "X"
//   e