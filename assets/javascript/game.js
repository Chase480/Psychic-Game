const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessedLetters = [];

var guessesLeft = 9;

var randomPickedLetter = null;

var wins = 0;
var losses = 0;


const updateGuessedLetters = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

const updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

const updateRandomLetter = function() {
    randomPickedLetter = letters[Math.floor(Math.random() * letters.length)];
};

const reset = function () {
    guessedLetters = [];
    guessesLeft = 9;
    updateRandomLetter();
    updateGuessesLeft();
    updateGuessedLetters();

};


updateGuessesLeft();
updateRandomLetter();


document.onkeyup = function(event) {
    guessesLeft--;

    const letter = event.key.toLowerCase();

    guessedLetters.push(letter);

    updateGuessesLeft();
    updateGuessedLetters();

    if (letter === randomPickedLetter) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;

        reset();

    }

    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        reset();
    }


};

