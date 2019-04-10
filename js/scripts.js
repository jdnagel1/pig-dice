// Business Interface Logic ----------------
  function userPlayer() {
    this.score = 0;
    active = false;
    id = 0;
  }

  var playerOne = new Player ();
  var playerTwo = new Player ();
  playerOne.active = true;
  playerOne.id = 1;
  playerTwo.active = true;
  playerTwo.id = 2;

  function activePlayer() {
    if (playerOne.active === true)
  } playerOne.active = true
    playerTwo.active = false {
    playerOne.active = false
    playerTwo.active = false
  }


  function rollDice() {
    return Math.floor(Math.random() * 6) + 1
  }



// User Interface Logic ----------------
$(document).ready(function()){
 $("#formOne").submit(function(event){
   event.preventDefault();
 }
});
