var MathGame = function() {
  this.cardToAdd = null;
  this.cardToRemember = null;
  this.cardVisible = null;
  this.correctAnswer = 0;
  this.playerAnswer = 0;
  this.playerScore = 0;
  this.player1Score = 0;
  this.player2Score = 0;
  this.winner = '';

}

//random number generator
MathGame.prototype.selectNumber = function() {
    return Math.floor(Math.random() * 10);
  };

/*random numbers generated for: this.cardVisible*/

MathGame.prototype.generateNumber = function() {
  this.cardVisible = MathGame.prototype.selectNumber();
  return this.cardVisible;
};

// MathGame.prototype._renderBoard = function () {
//  var that = this;
//  $('.js-score').text(this.playerScore);
 //$('input').each(function(??) {});
//
// };

//display initial card
//later change this to load after clicking a button "Click to start"

MathGame.prototype.displayFirstNumber = function(){
  var that = this;
  $(".number-turn").text(this.cardVisible);
  $(".temp-cardtoremember").text(this.cardToRemember);
  $(".temp-cardtoadd").text(this.cardToAdd);

  console.log("1cardVisible = " + this.cardVisible);
  console.log("1cardToRemember = " + this.cardToRemember);
  console.log("1cardToAdd = " + this.cardToAdd);
}

//display 2nd card and set initial value to cardToRemember
MathGame.prototype.displaySecondNumber = function () {
  var that = this;
  this.cardToRemember = this.cardVisible;
  this.cardVisible = MathGame.prototype.generateNumber();
  $(".number-turn").text(this.cardVisible);
  $(".temp-cardtoremember").text(this.cardToRemember);
  $(".temp-cardtoadd").text(this.cardToAdd);

  console.log("2cardVisible = " + this.cardVisible);
  console.log("2cardToRemember = " + this.cardToRemember);
  console.log("2cardToAdd = " + this.cardToAdd);
}

//display 3nd card and set initial value to cardToAdd
MathGame.prototype.displayThirdNumber = function () {
  var that = this;
  this.cardToAdd = this.cardToRemember;
  this.cardToRemember = this.cardVisible;
  this.cardVisible = MathGame.prototype.generateNumber();
  $(".number-turn").text(this.cardVisible);
  $(".temp-cardtoremember").text(this.cardToRemember);
  $(".temp-cardtoadd").text(this.cardToAdd);

  console.log("3cardVisible = " + this.cardVisible);
  console.log("3cardToRemember = " + this.cardToRemember);
  console.log("3cardToAdd = " + this.cardToAdd);
}


//old code re-write and then delete
/*MathGame.prototype.displayNumber = function() {
  var that = this;
  this.cardVisible = MathGame.prototype.generateNumber = function() {
    $('number-turn').show(this.cardVisible);
    $(document).keypress(function(e) {
      if(e.which == 13) {
          $('.number-turn').toggle(that.cardVisible);
          that.cardToRemember = that.cardVisible;
          that.cardVisible = MathGame.prototype.generateNumber = function() {
            return that.cardToRemember;

            setTimeout(function(){
               $('.number-turn').toggle(that.cardVisible);;
            }, 3000);
         };
      };

      $(document).keypress(function(f) {
        if(f.which == 13) {
          $('.number-turn').toggle(that.cardVisible);
          that.cardToAdd = that.cardToRemember;
          that.cardToRemember = that.cardVisible;

          that.cardVisible = MathGame.prototype.generateNumber = function() {

            setTimeout(function(){
               $('.number-turn').toggle(that.cardVisible);;
             }, 3000);
          };
        };
      });
    });
  };
};
*/
//end old code

    // show this.cardVisible,
    // if !cardToRemember
    //   else if !cardToAdd
    //   else ....
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
