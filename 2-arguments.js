const numberOfArguments = process.argv.length - 2; // Subtract 2 to get only the user-provided arguments

// Check the number of arguments and print the appropriate message.
if (numberOfArguments === 0) {
  console.log("No argument");
} else if (numberOfArguments === 1) {
  console.log("Argument found");
} else {
  // This covers cases where numberOfArguments is greater than 1.
  console.log("Arguments found");
}
