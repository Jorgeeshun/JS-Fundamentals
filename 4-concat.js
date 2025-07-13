// Get the first argument at index 2.
const firstArg = process.argv[2];

// Get the second argument at index 3.
const secondArg = process.argv[3];

// Print the arguments in the specified format using template literals.
// This will print "undefined is undefined" if no arguments are provided,
// or "arg1 is undefined" if only one argument is provided,
// which matches the implicit requirement of printing whatever is at those positions.
console.log(`${firstArg} is ${secondArg}`);
