/*2. Random Number Generator with Delay and Progress Indication:-
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining 
until the random number is generated and then outputs the generated number. */
// Solution :-  
// Store the delay in a variable for easy modification
let delay = 3000;

// Function to generate and log a random number
function randomNumGenerator() {
  console.log("Random number is:", Math.random());
}
// Initialize count variable
let count = delay / 1000; // Set count based on delay for accurate initial display

// Function to handle countdown and random number generation
function countdownAndGenerate() {
  if (count > 0) {
    console.log("Time remaining for generating random number is:", count);
    count--;
  } else {
    randomNumGenerator();
   count = delay / 1000; // Reset count based on delay
  }
}
// Start the countdown and generation process
const timer = setInterval(countdownAndGenerate, 1000);
