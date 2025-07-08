// 🔹 1. Function Declaration
// Can be called before or after it’s defined (hoisted)
function sayHello(name) {
  return `Hello, ${name}!`;
}
console.log(sayHello("Alice")); // Output: Hello, Alice!


// 🔹 2. Function Expression
// Stored in a variable, not hoisted (must be defined before calling)
const greet = function(name) {
  return `Hi, ${name}`;
};
console.log(greet("Bob")); // Output: Hi, Bob


// 🔹 3. Arrow Function
// Introduced in ES6, cleaner syntax, no `this` binding
const welcome = (name) => {
  return `Welcome, ${name}`;
};
console.log(welcome("Charlie")); // Output: Welcome, Charlie

// Short version (if only 1 parameter and 1 return statement)
const goodbye = name => `Goodbye, ${name}`;
console.log(goodbye("David")); // Output: Goodbye, David
