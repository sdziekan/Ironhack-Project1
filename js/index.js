var MathGame = function() {
  this.cardToAdd = null;
  this.cardToRemember = null;
  this.cardVisible = null;
  this.correctAnswer = null;
  this.playerAnswer = null;
  this.playerScore = 0;
  this.player1Score = 0;
  this.player2Score = 0;
  this.winner = '';

}

/*random numbers generated for: this.cardVisible*/
MathGame.prototype.generateNumber = function() {
  this.cardVisible = Math.floor(Math.random() * 10);
  return this.cardVisible;
};

//display initial card => this.cardVisible
//later change this to load after clicking a button "Click to start"

MathGame.prototype.displayFirstNumber = function(){
  var that = this;
  $(".number-turn").text(this.cardVisible);
  $(".temp-cardtoremember").text(this.cardToRemember);
  $(".temp-cardtoadd").text(this.cardToAdd);

  setTimeout(function () {
    $('div.hidden').fadeIn(1500).removeClass('hidden');
  }, 750);


  // console.log("1cardVisible = " + this.cardVisible);
  // console.log("1cardToRemember = " + this.cardToRemember);
  // console.log("1cardToAdd = " + this.cardToAdd);
};

//display 2nd card and set this.cardVisible value to this.cardToRemember
MathGame.prototype.displaySecondNumber = function () {
  var that = this;
  this.cardToRemember = this.cardVisible;
  this.cardVisible = MathGame.prototype.generateNumber();
  $(".number-turn").text(this.cardVisible);
  $(".temp-cardtoremember").text(this.cardToRemember);
  $(".temp-cardtoadd").text(this.cardToAdd);


  setTimeout(function () {
      $('div.hidden').fadeIn(1500).removeClass('hidden');
  }, 750);
  // console.log("2cardVisible = " + this.cardVisible);
  // console.log("2cardToRemember = " + this.cardToRemember);
  // console.log("2cardToAdd = " + this.cardToAdd);
}

//display 3nd card and set initial value to cardToAdd
//calculated correctAnswer as well
MathGame.prototype.displayThirdNumber = function () {
  var that = this;
  this.cardToAdd = this.cardToRemember;
  this.cardToRemember = this.cardVisible;
  this.cardVisible = MathGame.prototype.generateNumber();
  this.correctAnswer = this.cardToAdd + this.cardVisible;
  $(".number-turn").text(this.cardVisible);
  $(".temp-cardtoremember").text(this.cardToRemember);
  $(".temp-cardtoadd").text(this.cardToAdd);
  $(".temp-correctanswer").text(this.correctAnswer);


  console.log("3cardVisible = " + this.cardVisible);
  console.log("3cardToRemember = " + this.cardToRemember);
  console.log("3cardToAdd = " + this.cardToAdd);
  console.log("3correctAnswer = " + this.correctAnswer);
}

$(document).keydown(function(e) {
  switch(e.which) {
      case 13: // carriage return
        that.displaySecondNumber();
        break;

      default: return; // exit this handler for other keys
    };
  });

    // press "Enter"
    // this.cardToRemember = this.cardVisible
// MathGame.prototype.playerTurn = function ( {
//   var that = this;
// })

    // hide this.cardVisible (fade out)
    //   this.cardVisible = selectNumber()
    // show this.cardVisible (fade in)
    // hide this.cardToAdd[0]
    // show this.cardToRemember
    // press "Enter"
    // generate this.cardVisible
    // hide this.cardToRemember
    // show this.cardVisible
    // generate correctAnswer = cardToAdd + cardVisible
    // reassign values this.cardToAdd = this.cardToRemember
    //   - this.cardToRemember = this.cardVisible
    //   - this.cardVisible = new random number
    // var playerAnswer = player types a number and "Enter"
    // if playerAnswer = correctAnswer, playerScore++









var g = new MathGame();
console.log(g.generateNumber());
console.log(g.displayFirstNumber());
console.log(g.displaySecondNumber());
console.log(g.displayThirdNumber());
