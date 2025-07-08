// 1️⃣ Different Ways to Create Arrays

// Using Array Literals (most common)
let fruits = ["apple", "banana", "mango"];
console.log("Fruits:", fruits);

// Using the Array constructor
let numbers = new Array(10, 20, 30, 40);
console.log("Numbers:", numbers);

// Empty array and assigning values later
let cars = [];
cars[0] = "BMW";
cars[1] = "Tesla";
cars[2] = "Audi";
console.log("Cars:", cars);

// Mixed data types
let mixed = [42, "hello", true, null];
console.log("Mixed:", mixed);


// 2️⃣ Accessing & Modifying Elements

console.log("First fruit:", fruits[0]); // apple
fruits[1] = "orange";                  // change banana → orange
console.log("Modified fruits:", fruits);


// 3️⃣ Useful Array Methods

// ➕ push() - Add to end
fruits.push("grape");
console.log("After push:", fruits);

// ➖ pop() - Remove from end
fruits.pop();
console.log("After pop:", fruits);

// ➕ unshift() - Add to beginning
fruits.unshift("kiwi");
console.log("After unshift:", fruits);

// ➖ shift() - Remove from beginning
fruits.shift();
console.log("After shift:", fruits);

// 🔍 includes() - Check if element exists
console.log("Has mango?", fruits.includes("mango")); // true

// 🔢 indexOf() - Get index of an element
console.log("Index of orange:", fruits.indexOf("orange")); // 1

// 🔀 sort() - Sort array alphabetically
let animals = ["zebra", "cat", "elephant"];
animals.sort();
console.log("Sorted animals:", animals);

// 🔁 reverse() - Reverse array
animals.reverse();
console.log("Reversed animals:", animals);

// 🔗 join() - Join elements into a string
console.log("Animals string:", animals.join(" - "));

// 🔪 slice() - Get a portion (non-destructive)
let sliced = fruits.slice(0, 2); // [ 'apple', 'orange' ]
console.log("Sliced fruits:", sliced);

// 🧱 splice() - Add/Remove (destructive)
fruits.splice(1, 1, "pineapple"); // Replace index 1
console.log("After splice:", fruits);

// ➕ concat() - Combine arrays
let allItems = fruits.concat(animals);
console.log("Combined array:", allItems);


// 4️⃣ Looping Through Arrays

// ✅ for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ✅ for...of loop
console.log("Using for...of:");
for (let fruit of fruits) {
  console.log(fruit);
}

// ✅ forEach()
console.log("Using forEach:");
fruits.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});


// 5️⃣ Multidimensional Array
let matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

console.log("Matrix element [2][1]:", matrix[2][1]); // 6

