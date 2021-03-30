const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const guessedLetters [];

const guessesLeft = 9;

const wins = 0;
const losses = 0;

document.onkeydown = function(event) {

let letter = event.key.toLowerCase();

guessedLetters.push(letter);

guessesLeft--;
    
}

const guessesSoFar = function() {

    
}