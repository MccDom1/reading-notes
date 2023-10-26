// Get the user's name.
const String name = prompt("What is your name?");

// Welcome the user to the game.
alert(`Welcome to the About Me guessing game, ${name}!`);

// Ask the user five yes or no questions about you.
const String[] questions = {
  "Did I work for the Navy?",
  "Do I have a degree in computer science from Ronald Mcdonald?",
  "Do I have a PHD degree from The School Of Hard Knocks?",
  "Do I have experience at Code Fellows?",
  "Is a Life goal of mine to meet Harry Potter?"
};

// Keep track of the user's score.
int score = 0;

// Ask each question and check the user's answer.
for (String question : questions) {
  String answer = prompt(question);

  // Normalize the user input to lowercase.
  String normalizedAnswer = answer.toLowerCase();

  // Check if the user's answer is correct.
  if (normalizedAnswer.equals("yes") || normalizedAnswer.equals("y")) {
    score++;

    // Console log a message to the user indicating that they answered correctly.
    System.out.println("Correct!");
  } else {
    // Console log a message to the user indicating that they answered incorrectly.
    System.out.println("Incorrect.");
  }
}

// Get the user's guess.
int guess = Integer.parseInt(prompt("Guess a number between 1 and 100:"));

// Check if the guess is correct.
if (guess == 50) {
  // Display a correct alert.
  alert("Correct!");
} else {
  // Display an incorrect alert.
  alert(guess > 50 ? "Too high!" : "Too low!");
}

// Give the user four tries to get the correct answer.
int attempts = 4;
while (guess != 50 && attempts > 0) {
  attempts--;
  guess = Integer.parseInt(prompt("Guess again:"));
}

// If the user runs out of attempts, tell them the correct answer.
if (attempts == 0) {
  alert("The correct answer is 50.");
}

// Create an array of possible correct answers.
String[] possibleAnswers = {"blue", "green", "red", "yellow"};

// Get the user's guess.
String userGuess = prompt("Guess my favorite color:");

// Check if the guess is correct.
if (Arrays.asList(possibleAnswers).contains(userGuess)) {
  // Display a correct alert.
  alert("Correct!");
} else {
  // Display an incorrect alert.
  alert("Incorrect.");
}

// Give the user six tries to guess the correct answer.
int remainingAttempts = 6;
while (!Arrays.asList(possibleAnswers).contains(userGuess) && remainingAttempts > 0) {
  remainingAttempts--;
  userGuess = prompt("Guess again:");
}

// If the user runs out of attempts, display all of the possible correct answers.
if (remainingAttempts == 0) {
  alert(`The possible correct answers were: ${String.join(", ", possibleAnswers)}`);
}

// Keep track of the total number of correct answers.
int correctAnswers = 0;

// Check if the user answered the first five questions correctly.
for (String question : questions) {
  if (answer.equals("yes") || answer.equals("y")) {
    correctAnswers++;
  }
}

// Check if the user answered the numeric guessing question correctly.
if (guess == 50) {
  correctAnswers++;
}

// Check if the user answered the multiple choice question correctly.
if (Arrays.asList(possibleAnswers).contains(userGuess)) {
  correctAnswers++;
}

// Display the user's final score.
alert(`Your final score is: ${correctAnswers}/7`);