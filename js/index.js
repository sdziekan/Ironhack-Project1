var MathGame = function() {
  this.cards = [];
  this.correctAnswer = null;
  this.playerAnswer = null;
  this.playerScore = 0;
  this.player1Score = 0;
  this.player2Score = 0;
  this.winner = '';
  this.player1phase = true;
  this.player2phase = false;
  this.carriageReturnPhase1 = true;
  this.carriageReturnPhase2 = false;
  this.carriageReturnPhase3 = false;
  this.carriageReturnPhase4 = false;
};

//random number generator
MathGame.prototype.generateNumber = function() {
    return Math.floor(Math.random() * 10);
  };

//Function adding random number to cards[]
MathGame.prototype.addNumber = function() {
  this.cards.unshift(this.generateNumber());
};

//Function removing last item in array
MathGame.prototype.removeNumber = function() {
  this.cards.pop();
};

//Function setting game play phase
MathGame.prototype.setPlayPhase = function() {
  if (this.cards.length === 0) {
      this.carriageReturnPhase1 = true;
      this.carriageReturnPhase2 = false;
      this.carriageReturnPhase3 = false;
      this.carriageReturnPhase4 = false;
  } else if (this.cards.length === 1) {
    this.carriageReturnPhase1 = false;
    this.carriageReturnPhase2 = true;
    this.carriageReturnPhase3 = false;
    this.carriageReturnPhase4 = false;
  } else if (this.cards.length === 2 && !this.correctAnswer) {
    this.carriageReturnPhase1 = false;
    this.carriageReturnPhase2 = false;
    this.carriageReturnPhase3 = true;
    this.carriageReturnPhase4 = false;
  } else {
    this.carriageReturnPhase1 = false;
    this.carriageReturnPhase2 = false;
    this.carriageReturnPhase3 = false;
    this.carriageReturnPhase4 = true;
  }

};


//display initial card => this.cardVisible
//later change this to load after clicking a button "Click to start"

MathGame.prototype.displayFirstNumber = function(){
  var that = this;
  this.setPlayPhase();
  $(".number-turn").text(this.cards[0]);
  $(".temp-cardtoremember").text(this.cards[1]);
  $(".temp-cardtoadd").text(this.cards[2]);

  setTimeout(function () {
    $('div.hidden').fadeIn(1500).removeClass('hidden');
  }, 750);


  // console.log("1cardVisible = " + this.card[0]);
  // console.log("1cardToRemember = " + this.cards[1]);
  // console.log("1cardToAdd = " + this.cards[2]);
};

//display 2nd card and set this.cardVisible value to this.cardToRemember
MathGame.prototype.displaySecondNumber = function () {
  var that = this;
  this.cards.unshift(this.generateNumber());
  $(".number-turn").text(this.cards[0]);
  $(".temp-cardtoremember").text(this.cards[1]);
  $(".temp-cardtoadd").text(this.cards[2]);


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
  this.cards.unshift(this.generateNumber());
  this.correctAnswer = this.cards[0] + this.cards[2];
  $(".number-turn").text(this.cards[0]);
  $(".temp-cardtoremember").text(this.cards[1]);
  $(".temp-cardtoadd").text(this.cards[2]);
  $(".temp-correctanswer").text(this.correctAnswer);


  console.log("3cardVisible = " + this.cards[0]);
  console.log("3cardToRemember = " + this.cards[1]);
  console.log("3cardToAdd = " + this.cards[2]);
  console.log("3correctAnswer = " + this.correctAnswer);
}

//Script for carriage return in phase1 and phase2
// $(document).keydown(function(e) {
//   switch(e.which) {
//       case 13: // carriage return
//         that.displaySecondNumber();
//         break;
//
//       default: return; // exit this handler for other keys
//     };
//   });

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
