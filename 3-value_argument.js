const firstArgument = process.argv[2];

// Check if the first argument is undefined (meaning no argument was passed by the user).
if (firstArgument === undefined) {
  console.log("No argument");
} else {
  // If an argument exists, print it.
  console.log(firstArgument);
}