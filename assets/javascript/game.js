/* BASICS FOR THE GAME:
Computer makes a random letter choice
User selects a letter
Make sure user selection is a letter
Capture the computer's choice and the user's guess
Compare the choice and the guess
Determine Wins & Losses
Count the attempts made by user
Record all guesses made by user
When user wins, reset game, but not the stats
When user runs out of guesses, reset game, but not the stats
Display all game stats to the user */

//  Variables

var correct = 0;
var incorrect = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var pyschicChoice = "";
var userGuess = "";

// Array of alphabets for both computer and user to choose from

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Creating loop - loop did not work - commenting out

// for (var i = 0; 1 < alphabet.length; i++) {
//   console.log(alphabet[i]);
// }

// Randomly chooses a letter from the alphabet array. This is the psychic's choice.

// Function to Reset Game to original settings

// Grab users keystroke to intput there guess at the letter and start the game

// Output to place on the webpage

// Set the inner HTML contents of the game_output id to our html string
