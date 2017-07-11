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
  this.carriageReturnPhase = 1;
};

//Function adding random number to cards[]
MathGame.prototype.addNumber = function() {
  var that = this;
  this.cards.unshift(Math.floor(Math.random() * 10));
};

//Function removing last item in array
MathGame.prototype.removeNumber = function() {
  this.cards.pop();
};

//Function setting game play phase
MathGame.prototype.setPlayPhase = function() {
  if (this.cards.length === 0) {
      this.carriageReturnPhase = 1;
  } else if (this.cards.length === 1) {
    this.carriageReturnPhase = 2;
  } else if (this.cards.length === 2 && !this.correctAnswer) {
    this.carriageReturnPhase = 3;
  } else {
    this.carriageReturnPhase = 4;
  }

};


//display initial card => this.cardVisible
//later change this to load after clicking a button "Click to start"

MathGame.prototype.displayNumber = function(){
  var that = this;
  this.setPlayPhase();

  switch (this.carriageReturnPhase) {
    case 1:
      this.addNumber();
      $(".number-turn").text(this.cards[0]);
      $(".temp-cardtoremember").text(this.cards[1]);
      $(".temp-cardtoadd").text(this.cards[2]);
      //
      // setTimeout(function () {
      //   $('div.hidden').fadeIn(1500).removeClass('hidden');
      // }, 750);
      this.carriageReturnPhase += 1;
      break;

    case 2:
      this.addNumber();
      $(".number-turn").text(this.cards[0]);
      $(".temp-cardtoremember").text(this.cards[1]);
      $(".temp-cardtoadd").text(this.cards[2]);
      this.carriageReturnPhase += 1;
      break;

    case 3:
      this.addNumber();
      this.correctAnswer = this.cards[0] + this.cards[2];
      $(".number-turn").text(this.cards[0]);
      $(".temp-cardtoremember").text(this.cards[1]);
      $(".temp-cardtoadd").text(this.cards[2]);
      $(".temp-correctanswer").text(this.correctAnswer);

      this.carriageReturnPhase += 1;
      break;

      default:
        this.playerAnswer = prompt("Enter a number");
        if (this.playerAnswer === this.correctAnswer ) {
          this.playerScore += 1;
        }
        if (this.playerAnswer == this.correctAnswer ) {
          this.playerScore += 1;
        }
        
        this.addNumber();
        this.removeNumber();
        this.correctAnswer = this.cards[0] + this.cards[2];



        $(".number-turn").text(this.cards[0]);
        $(".temp-cardtoremember").text(this.cards[1]);
        $(".temp-cardtoadd").text(this.cards[2]);
        $(".temp-correctanswer").text(this.correctAnswer);









  }

//   if (this.carriageReturnPhase1 === true) {
//     $(".number-turn").text(this.cards[0]);
//     $(".temp-cardtoremember").text(this.cards[1]);
//     $(".temp-cardtoadd").text(this.cards[2]);
//
//     setTimeout(function () {
//       $('div.hidden').fadeIn(1500).removeClass('hidden');
//     }, 750);
//   } else if (this.)
//
//   // console.log("1cardVisible = " + this.card[0]);
//   // console.log("1cardToRemember = " + this.cards[1]);
//   // console.log("1cardToAdd = " + this.cards[2]);
};
//
// //display 2nd card and set this.cardVisible value to this.cardToRemember
// MathGame.prototype.displaySecondNumber = function () {
//   var that = this;
//   this.cards.unshift(this.generateNumber());
//   $(".number-turn").text(this.cards[0]);
//   $(".temp-cardtoremember").text(this.cards[1]);
//   $(".temp-cardtoadd").text(this.cards[2]);
//
//   setTimeout(function () {
//       $('div.hidden').fadeIn(1500).removeClass('hidden');
//   }, 750);
// }
//
// //display 3nd card and set initial value to cardToAdd
// //calculated correctAnswer as well
// MathGame.prototype.displayThirdNumber = function () {
//   var that = this;
//   this.cards.unshift(this.generateNumber());
//   this.correctAnswer = this.cards[0] + this.cards[2];
//   $(".number-turn").text(this.cards[0]);
//   $(".temp-cardtoremember").text(this.cards[1]);
//   $(".temp-cardtoadd").text(this.cards[2]);
//   $(".temp-correctanswer").text(this.correctAnswer);
//
//
//   console.log("3cardVisible = " + this.cards[0]);
//   console.log("3cardToRemember = " + this.cards[1]);
//   console.log("3cardToAdd = " + this.cards[2]);
//   console.log("3correctAnswer = " + this.correctAnswer);
// }
//
// //Script for carriage return in phase1 and phase2
// // $(document).keydown(function(e) {
// //   switch(e.which) {
// //       case 13: // carriage return
// //         that.displaySecondNumber();
// //         break;
// //
// //       default: return; // exit this handler for other keys
// //     };
// //   });
//
//     // press "Enter"
//     // this.cardToRemember = this.cardVisible
// // MathGame.prototype.playerTurn = function ( {
// //   var that = this;
// // })
//
//     // hide this.cardVisible (fade out)
//     //   this.cardVisible = selectNumber()
//     // show this.cardVisible (fade in)
//     // hide this.cardToAdd[0]
//     // show this.cardToRemember
//     // press "Enter"
//     // generate this.cardVisible
//     // hide this.cardToRemember
//     // show this.cardVisible
//     // generate correctAnswer = cardToAdd + cardVisible
//     // reassign values this.cardToAdd = this.cardToRemember
//     //   - this.cardToRemember = this.cardVisible
//     //   - this.cardVisible = new random number
//     // var playerAnswer = player types a number and "Enter"
//     // if playerAnswer = correctAnswer, playerScore++
//
//
//
//
//
//
//
//

var g = new MathGame();
//console.log(g.generateNumber());
