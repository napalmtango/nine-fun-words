$(function() {
  $('h1').html('Your Favorite Quiz'); 
 
});

//Global variables
let q = 0;
let chosen = 0;//reset with each new question
let feedback = "";//reset with each new question

const questions= [
  //index 0
  ["Question one, what is the best answer?",
  ['answer 1', false],
  ['answer 2', false],
  ['correct 3', true],
  ['answer 4',false]],

  //index 1  
  ["Question two, what is the best answer?",
  ['correct 5', true],
  ['answer 6', false],
  ['answer 7', false],
  ['answer 8', false]],

  //index 2
  ["Question three, what is the best answer?",
  ['correct 9', false],
  ['answer 10', true],
  ['answer 11', false],
  ['answer 12', false]]
];

function result() {
  console.log(questions[q][chosen][1]);
  if (questions[q][chosen][1]) {
    console.log("Answer is correct");
    feedback = $('#feedback');
    console.log(feedback);
    $('#feedback').addClass( "correct" )
    $('.result').html("<span class=\'rem1-35\'>&#127881; </span> Answer is correct");
    $('.next').html("next>>");
  } else {console.log("Answer is incorrect");
      feedback = $('#feedback');
      console.log(feedback);
      $('#feedback').addClass( "incorrect" );
      $('.result').html("<span class=\'rem1-35\'>&#128530; </span> Answer is incorrect");
      $('.next').html("next>>");
    } 
  for (let i = 0; i < 4; i++ ) {
    if (i+1 !== chosen){
      console.log(`disable choice ` + i)
    }
  }
  // for (let i = 0; i < 4; i++ ) {
  //   if (i+1 !== chosen){console.log(`disable choice ` + i)}
  // }
}

function reset(){
  console.log("next clicked");
  $('#feedback').removeClass( "correct" );
  $('#feedback').removeClass( "incorrect" );
  $('.result').html("");
  $('.next').html("");

}



//end Global variables



//Listeners
$( `#ans1` ).click(function() {
  chosen = 1;
  console.log("chosen = " + chosen);
  result();
});

$( `#ans2` ).click(function() {
  chosen = 2;
  console.log("chosen = " + chosen);
  result();
});

$( `#ans3` ).click(function() {
  chosen = 3;
  console.log("chosen = " + chosen);
  result();
});

$( `#ans4` ).click(function() {
  chosen = 4;
  console.log("chosen = " + chosen);
  result();
});

$( `.next` ).click(function() {
  reset();
});



//HTML manipulation
function populate() {
  $('#questions').html(questions[0][0]);
  for (let i = 1; i < 5; i++) {
    $(`#ans`+i).html(questions[0][i][0]);
  }

}

//Function calls
populate();

//Debug
console.log(questions);
$( ".answers" ).click(function() {
  // for (let i = 0; i < 4; i++) {
  //   if 
  // }
  console.log( "You clicked a paragraph!" );
});

