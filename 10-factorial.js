function factorial(n) {
  // Convert n to an integer to handle potential float inputs and ensure proper comparison.
  const num = parseInt(n);

  // Base case 1: If the number is NaN (or cannot be parsed as an integer), return 1.
  // This also covers cases where no argument is provided (n would be undefined, parseInt(undefined) is NaN).
  if (isNaN(num)) {
    return 1;
  }

  // Base case 2: Factorial of 0 or 1 is 1.
  // Also handles negative numbers by returning 1, as factorials are typically
  // defined for non-negative integers. This aligns with the "Factorial of NaN is 1" rule
  // by treating invalid/non-standard inputs as resulting in 1.
  if (num <= 1) {
    return 1;
  }

  // Recursive step: n * factorial(n - 1)
  return num * factorial(num - 1);
}

// Get the first command-line argument.
// process.argv[0] is 'node', process.argv[1] is the script file name.
// The first user argument is at index 2.
const inputArgument = process.argv[2];

// Compute the factorial using the recursive function.
const result = factorial(inputArgument);

// Print the computed factorial.
console.log(result);