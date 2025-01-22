function foo(a, b) {
  a = a || 0; // Default to 0 if a is null or undefined
  b = b || 0; // Default to 0 if b is null or undefined
  return a + b;
}

console.log(foo(1, null)); // Output: 1
console.log(foo(null, 1)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, null)); //Output: 0
//The improved version uses the OR operator to provide default values if either 'a' or 'b' is falsy (including null and undefined). This makes the function more robust and less prone to unexpected null-related errors.