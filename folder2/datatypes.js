// ==== Primitive Types ====

// String
let firstName = "Alice";
console.log("Type of firstName:", typeof firstName); // string

// Number
let score = 95.5;
console.log("Type of score:", typeof score); // number

// Boolean
let isPassed = true;
console.log("Type of isPassed:", typeof isPassed); // boolean

// Undefined
let unknown;
console.log("Type of unknown:", typeof unknown); // undefined

// Null (special case)
let emptyValue = null;
console.log("Type of emptyValue:", typeof emptyValue); // object (JavaScript quirk)

// BigInt
let bigNumber = 123456789012345678901234567890n;
console.log("Type of bigNumber:", typeof bigNumber); // bigint

// Symbol
let id = Symbol("userId");
console.log("Type of id:", typeof id); // symbol


// ==== Non-Primitive Types =====

// Object
let person = {
  name: "Bob",
  age: 30,
  isEmployee: true,
};
console.log("Type of person:", typeof person); // object

// Array (technically an object)
let colors = ["red", "green", "blue"];
console.log("Type of colors:", typeof colors); // object
console.log("Is colors an Array?", Array.isArray(colors)); // true

// Function
function greet() {
  return "Hello!";
}
console.log("Type of greet:", typeof greet); // function
