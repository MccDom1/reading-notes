// Get the user's name.
const name = prompt("What is your name?");

// Welcome the user to the game.
alert(`Welcome to the About Me guessing game, ${name}!`);

// Ask the user five yes or no questions about me.
const questions = [
  "Did I work for the Navy?",
  "Do I have a degree in computer science from Ronald Mcdonald?",
  "Do I have a PHD degree from The School Of Hard Knocks?",
  "Do I have experience at Code Fellows?",
  "Is a Life goal of mine to meet Harry Potter?"
];

// Keep track of the user's score.
let score = 0;

// Ask each question and check the user's answer.
for (const question of questions) {
  const answer = prompt(question);

  // Normalize the user input to lowercase.
  const normalizedAnswer = answer.toLowerCase();

  // Check if the user's answer is correct.
  if (normalizedAnswer === "yes" || normalizedAnswer === "y") {
    score++;

    // Console log a message to the user indicating that they answered correctly.
    console.log("Correct!");
  } else {
    // Console log a message to the user indicating that they answered incorrectly.
    console.log("Incorrect.");
  }
}

// Display the user's final score.
alert(`Your final score is: ${score}/5`);

// Display a personalized goodbye message to the user.
alert(`Thank you for playing the About Me guessing game, ${name}! I hope you learned something new about me.`);
