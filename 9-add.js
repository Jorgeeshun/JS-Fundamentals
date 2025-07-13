// This script defines a function to add two integers and then
// uses it to add two integers provided as command-line arguments.

/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(num1, num2) {
  return num1 + num2;
}

// Get the first command-line argument, which should be the first integer.
// process.argv[0] is 'node', process.argv[1] is the script file name.
// The first user argument is at index 2.
const firstArgument = process.argv[2];

// Get the second command-line argument, which should be the second integer.
// The second user argument is at index 3.
const secondArgument = process.argv[3];

// Convert the arguments to integers.
// If the arguments are not valid numbers, parseInt will return NaN.
// However, the problem statement implies valid integer inputs.
const num1 = parseInt(firstArgument);
const num2 = parseInt(secondArgument);

// Call the add function with the parsed integers and print the result.
// If num1 or num2 are NaN, the addition will result in NaN, which will be printed.
console.log(add(num1, num2));