// Get the first command-line argument.
// process.argv[0] is 'node', process.argv[1] is the script file name.
// The first user argument is at index 2.
const sizeArgument = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt() will return NaN (Not-a-Number) if the argument is not a valid number.
const size = parseInt(sizeArgument);

// Check if the parsed size is NaN.
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // If the size is a valid number, proceed to print the square.
  // The outer loop iterates through each row of the square.
  for (let x = 0; x < size; x++) {
    let row = ''; // Initialize an empty string for the current row.

    // The inner loop builds the string for the current row by adding 'X' characters.
    for (let j = 0; j < size; j++) {
      row += 'X'; // Append 'X' for each column.
    }
    // After building the row string, print it to the console.
    console.log(row);
  }
}