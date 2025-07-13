// This script attempts to convert the first command-line argument to an integer.
// If successful, it prints "My number: <integer_value>".
// Otherwise, it prints "Not a number".

// Get the first command-line argument provided by the user.
// process.argv[0] is 'node', process.argv[1] is the script file name.
// The first user argument is at index 2.
const argument = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt() will parse a string and return an integer.
// If the string cannot be parsed as a number, or if it's an empty string,
// it returns NaN (Not-a-Number).
const parsedNumber = parseInt(argument);

// Check if the result of parseInt() is NaN.
// isNaN() is used to determine whether a value is an illegal number (Not-a-Number).
if (isNaN(parsedNumber)) {
  console.log("Not a number");
} else {
  // If it's not NaN, it means it was successfully converted to an integer.
  console.log(`My number: ${parsedNumber}`);
}