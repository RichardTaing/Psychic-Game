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

// Created an Array of alphabetical options s for both computer and user to choose from
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

//  Created variables for stats

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var pyschicChoice;

// Randomly creating pyschics choice.
pyschicChoice = function() {
  pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log("The Psychic has choosen: " + pyschicChoice);
};

// Starts the script ever time a key is pressed, on the key release (onekeyup)
document.onkeyup = function(event) {
  // User presses a key, the key is then recorded under var userGuess and converts to UpperCase
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
  console.log(userGuess);

  //Log all keys pressed by user into guessesSoFar by pushing them into the empty array.
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    //65 to 90 is the range for Capital alphabates (A-Z)
    guessesSoFar.push(userGuess);
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar.join(", ");
  }

  // This is to check if the user has entered the correct letters
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    //If user guesses right, increase the wins count, reset guesses left, reset so far, pick a new letter:
    if (userGuess == pyschicChoice) {
      wins++;
      guessesLeft--;
      guessesSoFar = [];
      guessesLeft = 10;

      //displays update stats for user
      document.getElementById("guessesSoFar").innerHTML = guessesSoFar.join(
        ", "
      );
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;

      //Alerts the user
      alert(
        "Have you thought about being a Psychic? Cause you guessed right! '" +
          userGuess +
          "' ?"
      );
      alert("Do you have what it takes to try again?");

      // Choose another letter
      pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("The Psychic has choosen: " + pyschicChoice);
    } else {
      //If user guesses wrong, increase the losses count, and decrease number of guessesLeft.
      losses++;
      guessesLeft--;

      //This displays updated stats to user.
      document.getElementById("losses").innerHTML = losses;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }
  }
  //An alert will be displayed if the users presses keys other than letters
  else {
    alert("Please be sure to select a letter from the Alphabet (from A to Z)");
  }
  // When the users runs out of guesses this will reset the counter back to 0. If guessesLeft = 0, reset guessesLeft back to 10
  if (guessesLeft == 0) {
    guessesLeft = 10;
    guessesSoFar = [];

    //This displays updated stats to user with an Alert
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar.join(", ");
    alert("GAME OVER");
    alert("Looks like you suck at this. Want to try again?");

    // Choose another letter
    pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("The Psychic has choosen: " + pyschicChoice);
  }
};
