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

var winsdiv = document.getElementById("numberOfWins");
var lossesdiv = document.getElementById("numberOfLosses");
var guessesDiv = document.getElementById("guessesRemaining");
var displayBoardDiv = document.getElementById("output");
var wrongGuessDiv = document.getElementById("wrongGuess");

//start game function
//numofguesses = 9
//set chosen word
// lettersInWord = computerPickWord.length; --this goes in start game function
//check letter function: does input letter match anyof lettersInWord
//loop throught that array and push right guess letter
//if its a match, show in composers div
//if not a match, show in letters guess div

var boardGame = [];
for (var i = 0; i < computerPickWord.length; i++) {
  boardGame[i] = "_";
  // rightGuessLetter.push();
}
console.log(computerPickWord);

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
    // rightGuessLetter.push();
  }

  guessesDiv.textContent = numberofGuessCount;
  wrongGuessDiv.textContent = "";

}
// console.log(userInput);

// code referenced from Rock, Paper, Scissors solved video
// records keys pressed and  makes them uppercase

displayBoardDiv.textContent = boardGame.join(" ");
winsdiv.textContent = wins;
lossesdiv.textContent = losses;
guessesDiv.textContent = numberofGuessCount;

function checkBoardGameWithComputerPickWord() {
  for (var i = 0; i < computerPickWord.length; i++) {
    if (computerPickWord[i].toLowerCase() === userInput) {
      boardGame[i] = userInput;
    }
  }
  displayBoardDiv.textContent = boardGame.join(" ");
}

function playGame(){

    checkBoardGameWithComputerPickWord();

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
  
      // numberofGuessCount = numberofGuessCount - 1;
      // guessesdiv.textContent = "" + numberofGuessCount;
      // console.log("userInput:", userInput);
       
      // console.log("wrongGuessLetter:", wrongGuessLetter);
       
    }
}

document.onkeyup = function(event) {
  userInput = event.key.toLowerCase().toString();
  userKeycode=event.keyCode;
//  keeps keys that aren't upper case and lower case letters from being pressed'
  if( (userKeycode>= 65 && userKeycode  <=90 ) || ( userKeycode >=97 && userKeycode <= 122)  ) 
  {
    if(wrongGuessLetter.indexOf(userInput)  ===-1)  
         playGame();
    else
         alert("sorry you picked this letter already!");
  }
  else{
      alert("hey, letters only");
  }


  
//   }
};
