// Get the first command-line argument provided by the user.
// process.argv[0] is 'node', process.argv[1] is the script file name.
// The first user argument is at index 2.
const argument = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt() will return NaN (Not-a-Number) if the argument cannot be parsed as an integer.
const numberOfOccurrences = parseInt(argument);

// Conditionally print "Missing number of occurrences" using a logical AND (&&).
// If isNaN(numberOfOccurrences) is true, the console.log will execute.
// If isNaN(numberOfOccurrences) is false (meaning it's a valid number),
// the expression short-circuits, and console.log is not called by this line.
// This counts as the first of the two allowed console.log statements.
isNaN(numberOfOccurrences) && console.log("Missing number of occurrences");

// Initialize a counter for the loop.
let x = 0;

// Use a while loop to print "C is fun" the specified number of times.
// If numberOfOccurrences is NaN, the loop condition (i < numberOfOccurrences)
// will always evaluate to false, and the loop will not execute.
// This implicitly handles the case where the argument is not a number,
// without needing an explicit if/else statement for loop control.
while (x < numberOfOccurrences) {
  // This is the second of the two allowed console.log statements.
  console.log("C is fun");
  x++; // Increment the counter for the next iteration.
}