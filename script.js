$(function() {
  $('h1').html('9 Words You May be Familiar With'); 
 
});

//Global variables
let q = 0;
let chosen = 0;//reset with each new question
let feedback = "";//reset with each new question

const questions= [
  //index 0
  [["1. What does the word 'flummox' mean?", 2],
  ['A style of architecture characterized by ornate decorations', false],
  ['A famous British detective from a series of novels', false],
  ['To confuse or perplex greatly', true],
  ['A type of fruit commonly found in tropical regions',false]],

  //index 1  
  [["2. What does the word ‘shenanigans’ mean?", 3],
  ['A word puzzle originating in Ireland', false],
  ['A traditional Hawaiian feast', false],
  ['A state of total chaos', false],
  ['Playful or mischievous activity', true]],

  //index 2
  [["3. What does the word ‘brouhaha’ mean?", 2],
  ['A sound of hearty laughter', false],
  ['A traditional dance performed at weddings', false],
  ['An uproar or noisy situation', true],
  ['A hilarious situation', false]],

  //index 3
  [["4. What does the word ‘snollygoster’ mean?", 1],
  ['an expression of surprise', false],
  ['A shrewd, unprincipled person, especially a politician', true],
  ['A colloquial term for an antlion larva', false],
  ['A type of creature that lives in the snow', false]],

  //index 4
  [["5. What does the word ‘galumph’ mean?", 0],
  ['To move in a clumsy, awkward, or noisy manner', true],
  ['The sound created by a galloping horse', false],
  ['A fictional creature that grants wished', false],
  ['A type of flower commonly found in Northern Europe', false]],

  //index 5
  [["6. What does the word ‘codswallop’ mean?", 1],
  ['A type of candy popular in the late 1950s', false],
  ['Nonsense or rubbish', true],
  ['A mythical creature with the head of a lion and the body of a goat', false],
  ['A traditional Scottish dance', false]],

  //index 6
  [["7. What does the word ‘bumbershoot’ mean?", 0],
  ['An umbrella', true],
  ['A type of dance popular in the 1920s', false],
  ['A style of martial arts originating in Japan', false],
  ['A small creature that live in the sea', false]],

  //index 7
  [["8. What does the word ‘doozy’ mean?", 3],
  ['A traditional Mediterranean dish made with rice and vegetables', false],
  ['A style art used for surreal paintings', false],
  ['A boring story that puts one to sleep', false],
  ['Something extraordinary or outstanding', true]],

  //index 8
  [["9. What does the word ‘gadzooks’ mean?", 0],
  ['An exclamation of surprise or annoyance', true],
  ['A percussion instrument commonly used in African music', false],
  ['A character from a famous series of pulp fiction novels', false],
  ['A children’s board game from the 1940s', false]],
];

function removeListeners(){
  for (let i = 0; i < 4; i++ ) {
    console.log(`disable choice ` + i);
    $( `#ans`+i ).unbind();
    $( `#ans`+i ).toggleClass("active");
  }
}

function result() {
  console.log(questions[q][chosen+1][1]);
  console.log(`q = ` + q);
  if (questions[q][chosen+1][1]) {
    console.log("Answer is correct");
    feedback = $('#feedback');
    console.log(feedback);
    $('#feedback').addClass( "correct" )
    $('.result').html("<span class=\'rem1-35\'>&#127881; </span> Yes, that's the correct answer!");
    $('.next').html("next>>");
  } else {console.log("Answer is incorrect");
      feedback = $('#feedback');
      console.log(feedback);
      $('#feedback').addClass( "incorrect" );
      $( `#ans${questions[q][0][1]}` ).toggleClass("the-right-one");
      $('.result').html("<span class=\'rem1-35\'>&#128530; </span> I'm sorry, that answer is incorrect");
      $('.next').html("next>>");
    } 
  removeListeners(); 
}

function reset(){
  console.log("next clicked");
  $('#feedback').removeClass( "correct" );
  $('#feedback').removeClass( "incorrect" );
  $( `#ans`+ questions[q][0][1] ).removeClass("the-right-one");
  $('.result').html("");
  $('.next').html("");
  setListeners();
  q++;
  populate();
  if (q == 8){$(`.next`).addClass("hidden");} 
}
//end Global variables



//Listeners
function setListeners(){
  for (let i = 0; i < 4; i++ ) {
    $( `#ans`+i ).toggleClass("active");
    $( `#ans` + i ).click(function() {
      chosen = i;
      console.log("chosen = " + chosen);
      result();
    });
  }
}

$( `.next` ).click(function() {
  reset();
});


//HTML manipulation
function populate() {
  $('#questions').html(questions[q][0][0]);
  for (let i = 0; i < 4; i++) {
    let ii = i+1
    $(`#ans${i}`).html(questions[q][ii][0]);
  }
}

//Function calls
populate();
setListeners();



