    var wordList = [ "SHOSTAKOVITCH", "TCHAIKOVSKY", "RACHMONINOFF", "PROKOFIEV", "RIMSKYKORSAKOV", "MUSSORGSKY"];

    // code referenced from Rock, Paper, Scissors solved video
    // records keys pressed and  makes them uppercase
    document.onkeyup = function() {
        var userguess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userguess);
    }
//math.random chooses a random number between 0 and 1, is multiplied by the number of words in the array, and is rounded to the lowest whole number with Math.Floor 
    var computerRandIndex = Math.floor(Math.random()*wordList.length);
// computer number chose is aligned with word list 
    var computerPickWord = wordList[computerRandIndex]; 

    console.log(computerPickWord);

var numberofGuessCount = 9;