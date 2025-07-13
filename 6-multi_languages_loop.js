// This script prints three specific lines using an array and a loop.

// Define an array containing the messages to be printed.
// Using 'const' as 'var' is not allowed.
const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Iterate over each message in the 'messages' array using a for...of loop.
// This loop structure naturally handles iteration without needing an explicit counter
// or if/else statements, and allows for a single console.log call per iteration.
for (const message of messages) {
  // Print the current message.
  // This is the only console.log call allowed.
  console.log(message);
}