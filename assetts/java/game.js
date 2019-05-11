    var wordList = [ "SHOSTAKOVITCH", "TCHAIKOVSKY", "RACHMONINOFF", "PROKOFIEV", "RIMSKYKORSAKOV", "MUSSORGSKY"];

    
//math.random chooses a random number between 0 and 1, is multiplied by the number of words in the array, and is rounded to the lowest whole number with Math.Floor 
    var computerRandIndex = Math.floor(Math.random()*wordList.length);
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

    var rightGuessLetter = "";
    console.log(rightGuessLetter);

    var boardGame = [];
        for (var i=0; i < computerPickWord; i++) {
            boardGame [i] = "_";
        }
    console.log(computerPickWord);

    var userInput = "";
        function resetGame () {
            numberofGuessCount = 9;
            wins = 0;
            losses = 0;
        }
    console.log(userInput);

 // code referenced from Rock, Paper, Scissors solved video
    // records keys pressed and  makes them uppercase
    document.onkeyup = function() {
        var userguess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userguess);
        var displayBoardDiv = document.getElementById("output");
        displayBoardDiv.textContent = boardGame.join("");


    var winsdiv = document.getElementById("numberOfWins");
    var lossesdiv = document.getElementById("numberOfLosses");
    var guessesdiv = document.getElementById("guessesRemaining");


    if(computerPickWord.indexOf(userInput)> -1) {
        boardGame[computerPickWord.indexOf(userInput)]=userInput;
        displayBoardDiv.textContent=boardGame.join("");
        rightGuessLetter = rightGuessLetter + userInput;
        console.log(rightGuessLetter);
    }

    if(computerPickWord===rightGuessLetter){
        wins++;
        winsdiv.textContent="wins" + wins ;
        resetGame();
    }
    

    else {
        numberofGuessCount = numberofGuessCount-1;
        guessesdiv.textContent="" + numberofGuessCount;
        var outputWrongDiv= document.getElementById("wrongGuess");
        outputWrongDiv.textContent = wrongGuessLetter;
        wrongGuessLetter=wrongGuessLetter + userInput + ",";
        // console.log(wrongGuessLetter);
    }
        if(numberofGuessCount===0) {
            losses++;
            lossesdiv.textContent="losses" + losses ;
            resetGame();
        }
    

    }
