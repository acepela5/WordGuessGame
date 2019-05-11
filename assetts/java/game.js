var wordList = [
  "SHOSTAKOVITCH",
  "TCHAIKOVSKY",
  "RACHMONINOFF",
  "PROKOFIEV",
  "RIMSKYKORSAKOV",
  "MUSSORGSKY"
];
// code influenced by sample sent from instructor Phil L.

//math.random chooses a random number between 0 and 1, is multiplied by the number of words in the array, and is rounded to the lowest whole number with Math.Floor
var computerRandIndex = Math.floor(Math.random() * wordList.length);
// computer number chose is aligned with word list
var computerPickWord = wordList[computerRandIndex];
console.log(computerPickWord);

var numberofGuessCount = 9;
console.log(numberofGuessCount);

var wins = 0;
console.log(wins);

var losses = 0;

var wrongGuessLetter = "";
console.log(wrongGuessLetter);

// connects the html elements to the js actions
var winsdiv = document.getElementById("numberOfWins");
var lossesdiv = document.getElementById("numberOfLosses");
var guessesDiv = document.getElementById("guessesRemaining");
var displayBoardDiv = document.getElementById("output");
var wrongGuessDiv = document.getElementById("wrongGuess");

// adds underscore to the board 
var boardGame = [];
for (var i = 0; i < computerPickWord.length; i++) {
  boardGame[i] = "_";
}
console.log(computerPickWord);

// resets game
var userInput = "";
function resetGame() {
    boardGame = [];
  numberofGuessCount = 9;
  wordList = [
    "SHOSTAKOVITCH",
    "TCHAIKOVSKY",
    "RACHMONINOFF",
    "PROKOFIEV",
    "RIMSKYKORSAKOV",
    "MUSSORGSKY"
  ];
  // code influenced by sample sent from instructor Phil L.

  //math.random chooses a random number between 0 and 1, is multiplied by the number of words in the array, and is rounded to the lowest whole number with Math.Floor
  computerRandIndex = Math.floor(Math.random() * wordList.length);
  // computer number chose is aligned with word list
  computerPickWord = wordList[computerRandIndex];
  console.log(computerPickWord);

  console.log(numberofGuessCount);

   wrongGuessLetter = "";
  console.log(wrongGuessLetter);

  for (var i = 0; i < computerPickWord.length; i++) {
    boardGame[i] = "_";
  }

  guessesDiv.textContent = numberofGuessCount;
  wrongGuessDiv.textContent = "";

}
// displays numbers in div 
displayBoardDiv.textContent = boardGame.join(" ");
winsdiv.textContent = wins;
lossesdiv.textContent = losses;
guessesDiv.textContent = numberofGuessCount;

// adds the correct number of underscores for the computer choosen word
function checkBoardGameWithComputerPickWord() {
  for (var i = 0; i < computerPickWord.length; i++) {
    if (computerPickWord[i].toLowerCase() === userInput) {
      boardGame[i] = userInput;
    }
  }
  displayBoardDiv.textContent = boardGame.join(" ");
}

// when the game is being played...
function playGame(){

    checkBoardGameWithComputerPickWord();

    // if the letter chosen does not match a letter in the chosen word, the number of guesses goes down
    // if the number of guess reaches 0 the number of losses goes up by one and the game is reset
    if (boardGame.indexOf("_") === -1) {
      wins++;
      winsdiv.textContent = " " + wins;
      resetGame();
    }
    else {
       if(computerPickWord.toLowerCase().indexOf(userInput)===-1){
          wrongGuessLetter += userInput + ",";
          wrongGuessDiv.textContent= wrongGuessLetter;
          numberofGuessCount = numberofGuessCount - 1;
          guessesDiv.textContent = numberofGuessCount -1;
          if (numberofGuessCount === 0) {
              losses++;
              lossesdiv.textContent = " " + losses;
              resetGame();
          }
       }       
    }
}
// changes letter entered to lower case letters and a string
document.onkeyup = function(event) {
  userInput = event.key.toLowerCase().toString();
  userKeycode=event.keyCode;
//  keeps keys that aren't upper case and lower case letters from being pressed
// https://www.ascii.cl/htmlcodes.htm
  if( (userKeycode>= 65 && userKeycode  <=90 ) || ( userKeycode >=97 && userKeycode <= 122)  ) 
  {
    if(wrongGuessLetter.indexOf(userInput)  ===-1)  
         playGame();
    else
         alert("sorry, you picked this letter already!");
  }
  else{
      alert("Hey, letters only!");
  }

};
