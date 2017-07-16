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
  } else if (this.cards.length === 2) {
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
      $(".number-turn").css("color", "red");
      $(".temp-cardtoremember").text(this.cards[1]);
      $(".temp-cardtoadd").text(this.cards[2]);
      $(".temp-carriage-return-class").text(this.carriageReturnPhase);

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

        // g.timerVal = setInterval(function(){
        //   if (this.timerVal == 0){
        //     clearInterval(this.timerVal);
        //     $('.reponse').html("Player turn over");
        //     $('#form1').css({'visibility': 'hidden', 'opacity': '0'});
        //     player1phase = false;
        //   }
        //   else if (player1phase) {
        //     this.timerVal--;
        //     $('.timer').html(this.timerVal);
        //   }
        //   else {
        //     clearInterval(this.timerVal);
        //     $('#form1').css({'visibility': 'hidden', 'opacity': '0'});
        //   }
        // }, 1000);




        $(".number-turn").text(this.cards[0]);
        $(".temp-cardtoremember").text(this.cards[1]);
        $(".temp-cardtoadd").text(this.cards[2]);
        $(".temp-correctanswer").text(this.correctAnswer);
        $(".js-score").text(g.playerScore + " points");
        $('.temp-carriage-return-class').text(this.carriageReturnPhase);

      }
  };



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

  // $(document).keydown(function(e) {
  //   var that = this;
  //
  //   switch(e.which) {
  //     case 13: // carriage return
  //       if (that.carriageReturnPhase === 1) {
  //           console.log('phase 1');
  //           that.displayNumber();
  //       } else {
  //         console.log(g.carriageReturnPhase)
  //       };
  //     break;
  //
  //     default:
  //     console.log('wtf?')
  //     return; // exit this handler for other keys
  //
  //   };
  // });


//Timer
//still need to activate on keystroke and not page load
//still need to change player turn state upon completion
//still need to update player score upon completion

function gameTimer() {
  var i = 10;
  var intervalId = setInterval(function () {
    this.timerVal = i;

//    console.log(i);
    $("#timer").text(this.timerVal);
    i--;
//
    if (i == -1) {
//       g.player1phase = !g.player1phase;
// //      $(this.player2phase).toggle();

     clearInterval(intervalId);
     setScore();
     g.cards = [];

     this.carriageReturnPhase = 1;

    }
  }, 1000);
}
// template 2 ends

function setScore(){
  if (g.player1phase == true) {
    g.player1Score = g.playerScore;
    g.player1phase = false;
    g.playerScore = 0;
  } else {
    g.player2Score = g.playerScore;
  }
}

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
  $(this).css({'background-color': '#ffffff'});
});

//$(".timer").text(this.intervalId)




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
//console.log(g.generateNumber());

//});
