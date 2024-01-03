Number Guess Game

Overview

This simple web-based number guess game is implemented in JavaScript. The game generates a random number between 1 and 100, and the player needs to guess the correct number within 10 attempts.


JavaScript Concepts Used

1. Variables

randomNumber: Stores the randomly generated number for each game.

previousGuesses: An array to keep track of the player's previous guesses.

numGuess: Keeps count of the number of guesses made.

playGame: A flag to determine if the game is still active.

2. DOM Manipulation

submit: References the submit button.

userInput: References the input field for user guesses.

startOver: References the container for result paragraphs.

lowOrHi: References the element displaying if the guess is too high or too low.

guessSlot: References the element displaying previous guesses.

remaining: References the element displaying remaining attempts.

p: A dynamically created paragraph element.

3. Event Handling

Listens for a click event on the submit button and triggers the validateGuess function.

4. Conditional Statements

Checks if the guess is a valid number within the specified range.

Displays alerts if the input is invalid.

5. Functions

validateGuess: Validates user input and updates the game state accordingly.

checkGuess: Compares the user's guess with the random number and provides feedback.

displayGuess: Displays the guessed number and updates the remaining attempts.

displayMessage: Displays messages for correct, too low, or too high guesses.

endGame: Disables input, displays the game over message, and offers a new game option.

newGame: Resets variables, enables input, and removes the game over message.

How to Play


1. Enter a number between 1 and 100 in the input field.

2. Click the "Submit" button to submit your guess.

3. Receive feedback on whether your guess is correct, too low, or too high.

4. Repeat steps 1-3 until you guess the correct number or run out of attempts.

5. After the game ends, click "Start New Game" to play again.


Have fun guessing the number!
