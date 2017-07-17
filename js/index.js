//$('document').ready(function(){

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
  this.timerVal = 15;
};

//Function adding random number to cards[]
MathGame.prototype.addNumber = function() {
  var that = this;
  this.cards.unshift(Math.floor(Math.random() * 10));
};

//Function removing last item in cards[]
MathGame.prototype.removeNumber = function() {
  this.cards.pop();
};

//Function setting game play phase
MathGame.prototype.setPlayPhase = function() {
  if (this.cards.length === 0) {
      this.carriageReturnPhase = 1;
  } else if (this.cards.length === 1) {
    this.carriageReturnPhase = 2;
  } else if (this.cards.length === 2) {
    this.carriageReturnPhase = 3;
  } else {
    this.carriageReturnPhase = 4;
  }

};

//actions during game play phase
MathGame.prototype.displayNumber = function(){
  var that = this;
  this.setPlayPhase();

  switch (this.carriageReturnPhase) {
    case 1:
      this.addNumber();
      $(".number-turn").text(this.cards[0]);
      $(".number-turn").css("color", "red");
      $(".temp-cardtoremember").text(this.cards[1]);
      $(".temp-cardtoadd").text(this.cards[2]);
      $(".temp-carriage-return-class").text(this.carriageReturnPhase);
      $("#advance-cards").text("Click for Second Card");

      setTimeout(function () {
        $('div.fade').fadeIn(1500).removeClass('fade');
      }, 750);

      this.carriageReturnPhase += 1;
      break;

    case 2:
      this.addNumber();
      $(".number-turn").text(this.cards[0]);
      $(".number-turn").css("color", "blue");
      $(".temp-cardtoremember").text(this.cards[1]);
      $(".temp-cardtoadd").text(this.cards[2]);
      $(".temp-carriage-return-class").text(this.carriageReturnPhase);
      $("#advance-cards").text("Click to Start Game");

      setTimeout(function () {
        $('div.fade').fadeIn(1500).removeClass('fade');
      }, 750);

      this.carriageReturnPhase += 1;
      break;

    case 3:
      this.addNumber();
      this.correctAnswer = this.cards[0] + this.cards[2];
      $(".number-turn").text(this.cards[0]);
      $(".number-turn").css("color", "white");
      $(".temp-cardtoremember").text(this.cards[1]);
      $(".temp-cardtoadd").text(this.cards[2]);
      $(".temp-correctanswer").text(this.correctAnswer);
      $('.temp-carriage-return-class').text(this.carriageReturnPhase);
      $("#advance-cards").css({'visibility': 'hidden', 'opacity': '0'});
      $("form").css("visibility", "visible"); //Enable

      this.carriageReturnPhase += 1;
      gameTimer();
      break;

    default:
      var that = this;
      if (this.playerAnswer == this.correctAnswer){
        this.playerScore += 1;
        this.addNumber();
        this.removeNumber();
        this.correctAnswer = this.cards[0] + this.cards[2];
      } else {
        this.addNumber();
        this.removeNumber();
        this.correctAnswer = this.cards[0] + this.cards[2];
      }

        $('#form1').css({'visibility': 'visible', 'opacity': '1'});
        $(".number-turn").text(this.cards[0]);
        $(".temp-cardtoremember").text(this.cards[1]);
        $(".temp-cardtoadd").text(this.cards[2]);
        $(".temp-correctanswer").text(this.correctAnswer);
        $(".js-score").text(g.playerScore + " points");
        $('.temp-carriage-return-class').text(this.carriageReturnPhase);
      }
  };


//still need to activate on keystroke and not page load
//still need to change player turn state upon completion
//still need to update player score upon completion

//Timer Function
function gameTimer() {
  var i = 30;
  var intervalId = setInterval(function () {
    this.timerVal = i;

//    console.log(i);
    $("#timer").text("TIMER: "+this.timerVal);
    i--;
//
    if (i == -1) {

     clearInterval(intervalId);
     setScore();
     scoreDisplay();
     g.cards = [];

     this.carriageReturnPhase = 1;


    }
  }, 1000);
}

//Function to display score
function scoreDisplay () {
     $(".winner-display").css('visibility', 'visible');
     $(".winner-display").html('<h1>Your Score: </h1>').append(g.player1Score);
};


//Function to set Player score values after turn
function setScore(){
  if (g.player1phase == true) {
    g.player1Score = g.playerScore;
    g.player1phase = false;
    g.playerScore = 0;
  } else {
    g.player2Score = g.playerScore;
  }
}

//Function to determine winner
function winnerSet() {
  if (g.player1Score > g.player2Score) {
    g.winner = "Player 1";
  } else if (g.player1Score < g.player2Score) {
    g.winner = "Player 2";
  } else if (g.player1Score == g.player2Score) {
    g.winner = "It's a tie";
  } else {
    g.winner = "error in the code";
  }
}

//Various functions to set acctions for button clicks
$('#playgame1').click(function(){
  $('.landing').css({'visibility': 'hidden', 'opacity': '0'});
  $('.hidden').css({'visibility': 'visible', 'opacity': '1'});
});

$('#advance-cards').click(function(){
    $("#number").focus();
    g.displayNumber();
  });

$("#button").click(function(){
  g.playerAnswer = $("#number").val();
  $("#number").val('');
  $("#number").focus();

  g.displayNumber();
  })

//Effects to look nice
$("#playgame1").mouseenter(function(){
  $(this).css({'background-color': 'papayawhip'})
});

$("#playgame1").mouseleave(function(){
  $(this).css({'background-color': '#ffffff'});
});

$("#playgame2").mouseenter(function(){
  $(this).css({'background-color': 'papayawhip'})
});

$("#playgame2").mouseleave(function(){
  $(this).css({'background-color': 'gray'});
});


//variable that I need to set for this game to work, but I don't fully understand why?
var g = new MathGame();
