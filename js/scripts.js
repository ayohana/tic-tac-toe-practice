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
  console.log(row1.charAt(0))
  console.log(row1.charAt(1))
  console.log(row1.charAt(2))
  if (row1 === "XXX" || row1 === "OOO"){
    return true;
  } else if (row2 === "XXX" || row2 === "OOO") {
    return true;
  } else if (row3 === "XXX" || row3 === "OOO") {
    return true;
  } else {
    return false;
  }
}

Board.prototype.checkColumn = function(){
  var col1 = this.space1.mark + this.space4.mark + this.space7.mark;
  var col2 = this.space2.mark + this.space5.mark + this.space8.mark;
  var col3 = this.space3.mark + this.space6.mark + this.space9.mark;
  if (col1 === "XXX" || col1 === "OOO"){
    return true;
  } else if (col2 === "XXX" || col2 === "OOO") {
    return true;
  } else if (col3 === "XXX" || col3 === "OOO") {
    return true;
  } else {
    return false;
  }
}

Board.prototype.checkDiagonal = function(){
  var diag1 = this.space1.mark + this.space5.mark + this.space9.mark;
  var diag2 = this.space3.mark + this.space5.mark + this.space7.mark;
  if (diag1 === "XXX" || diag1 === "OOO"){
    return true;
  } else if (diag2 === "XXX" || diag2 === "OOO") {
    return true;
  } else {
    return false;
  }
}

Board.prototype.checkWinner = function(curSpace){
  if (this.checkRow() === true|| this.checkColumn() === true || this.checkDiagonal() === true){
    $("#player1turn").hide();
    $("#player2turn").hide();
    if (curSpace.markedBy() === "X"){
      $("#player1wins").show();
    } else {
      $("#player2wins").show();      
    }
  }
}

// Space Constructor --------------------------
function Space (xCoordinate, yCoordinate){
  this.xCoordinate = xCoordinate,
  this.yCoordinate = yCoordinate,
  this.mark = ""
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

Game.prototype.changeStatus = function(cur){
  if (this.player1.status){
    this.player1.status = false;
    this.player2.status = true;
    cur.text("X");
    $("#player1turn").hide();
    $("#player2turn").show();
    return this.player1;
  } else {
    this.player1.status = true;
    this.player2.status = false;
    cur.text("O");
    $("#player1turn").show();
    $("#player2turn").hide();
    return this.player2;
  }
}

// function foo() {
//   // do things, then
//   removeEventListener('click', "div#space1"));
// }


var game = new Game();


// User Interface Logic


$(document).ready(function(){
  $("div#space1").click(function(event){
    event.preventDefault;
    var currentSpace = $("div#space1");
    var currentPlayer = game.changeStatus(currentSpace);
    game.board.space1.markWith(currentPlayer.mark());
    game.board.checkWinner(game.board.space1);
    currentSpace.off('click');
  });

  $("div#space2").click(function(event){
    event.preventDefault;
    var currentSpace = $("div#space2");
    var currentPlayer = game.changeStatus(currentSpace);
    game.board.space2.markWith(currentPlayer.mark());
    game.board.checkWinner(game.board.space2);
    currentSpace.off('click');
  });

  $("div#space3").click(function(event){
    event.preventDefault;
    var currentSpace = $("div#space3");
    var currentPlayer = game.changeStatus(currentSpace);
    game.board.space3.markWith(currentPlayer.mark());
    game.board.checkWinner(game.board.space3);
    currentSpace.off('click');
  });

  $("div#space4").click(function(event){
    event.preventDefault;
    var currentSpace = $("div#space4");
    var currentPlayer = game.changeStatus(currentSpace);
    game.board.space4.markWith(currentPlayer.mark());
    game.board.checkWinner(game.board.space4);
    currentSpace.off('click');
  });

  $("div#space5").click(function(event){
    event.preventDefault;
    var currentSpace = $("div#space5");
    var currentPlayer = game.changeStatus(currentSpace);
    game.board.space5.markWith(currentPlayer.mark());
    game.board.checkWinner(game.board.space5);
    currentSpace.off('click');
  });

  $("div#space6").click(function(event){
    event.preventDefault;
    var currentSpace = $("div#space6");
    var currentPlayer = game.changeStatus(currentSpace);
    game.board.space6.markWith(currentPlayer.mark());
    game.board.checkWinner(game.board.space6);
    currentSpace.off('click');
  });

  $("div#space7").click(function(event){
    event.preventDefault;
    var currentSpace = $("div#space7");
    var currentPlayer = game.changeStatus(currentSpace);
    game.board.space7.markWith(currentPlayer.mark());
    game.board.checkWinner(game.board.space7);
    currentSpace.off('click');
  });

  $("div#space8").click(function(event){
    event.preventDefault;
    var currentSpace = $("div#space8");
    var currentPlayer = game.changeStatus(currentSpace);
    game.board.space8.markWith(currentPlayer.mark());
    game.board.checkWinner(game.board.space8);
    currentSpace.off('click');
  });

  $("div#space9").click(function(event){
    event.preventDefault;
    var currentSpace = $("div#space9");
    var currentPlayer = game.changeStatus(currentSpace);
    game.board.space9.markWith(currentPlayer.mark());
    game.board.checkWinner(game.board.space9);
    currentSpace.off('click');
  });

})