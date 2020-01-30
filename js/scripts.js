// Business Logic
function Player(mark) {
  this.mark = mark;
}

Player.prototype.mark = function() {
  return this.mark;
}



// User Interface Logic
var testPlayer = new Player("X");
console.log(testPlayer.mark());


$(document).ready(function(){
  $("#x1y1").click(function(){
    $("#x1y1").css({"background-color":"blue"});

  });
})