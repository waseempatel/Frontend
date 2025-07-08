// Variables in JavaScript

// 1. Using 'var' (function-scoped)
var myName; // Declaration
myName = "James"; // Initialization
console.log("Name (var):", myName);

var age = 25; // Declaration + Initialization
console.log("Age (var):", age);

// 2. Using 'let' (block-scoped, preferred in modern JS)
let city; // Declaration
city = "New York"; // Initialization
console.log("City (let):", city);

let country = "USA"; // Declaration + Initialization
console.log("Country (let):", country);

// 3. Using 'const' (block-scoped, must be initialized immediately)
const pi = 3.14159; // Declaration + Initialization
console.log("Pi (const):", pi);

// const gravity; ❌ This would throw an error (must initialize)
// gravity = 9.8;

// 4. Variable Types
let isStudent = true;               // Boolean
let marks = 89.5;                   // Number
let fullName = "John Doe";         // String
let hobbies = ["reading", "coding"]; // Array
let user = { id: 1, role: "admin" }; // Object

console.log("isStudent:", isStudent);
console.log("marks:", marks);
console.log("fullName:", fullName);
console.log("hobbies:", hobbies);
console.log("user:", user);

