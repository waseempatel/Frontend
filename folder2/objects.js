// 1️⃣ Different Ways to Create an Object

// ✅ Object Literal
let person = {
  name: "John",
  age: 28,
  country: "India"
};

// ✅ Object Constructor
let car = new Object();
car.brand = "Toyota";
car.model = "Fortuner";
car.year = 2023;

// ✅ Using Function (Factory Function)
function createUser(name, email) {
  return {
    name: name,
    email: email
  };
}
let user = createUser("Alice", "alice@example.com");

// ✅ Using Class (ES6)
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}
let student = new Student("Ravi", 10);


// 2️⃣ Different Ways to Access Object Properties

console.log(person.name);         // Dot notation
console.log(person["age"]);       // Bracket notation

let key = "country";
console.log(person[key]);         // Access with variable key


// 3️⃣ Deleting a Property from Object

console.log("Before delete:", person);
delete person.age;
console.log("After delete:", person);


// 4️⃣ Check if a Key Exists in Object

console.log("Is 'name' in person?", "name" in person);             // true
console.log("Has 'email'?", person.hasOwnProperty("email"));       // false
console.log("Is 'age' in person?", person.hasOwnProperty("age"));  // false (we deleted it)


// 🔍 Printing Object Data Nicely

console.log("\nObject: car");
for (let prop in car) {
  console.log(`${prop}: ${car[prop]}`);
}

console.log("\nObject: user");
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
