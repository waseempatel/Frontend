// Classic for loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop:", i);
}

// While loop
let j = 1;
while (j <= 2) {
  console.log("While loop:", j);
  j++;
}

// Do-While loop
let k = 1;
do {
  console.log("Do-While loop:", k);
  k++;
} while (k <= 1);

// For-of loop
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// For-in loop
let car = { brand: "Toyota", model: "Corolla", year: 2020 };
for (let prop in car) {
  console.log(prop + ":", car[prop]);
}

// forEach method
fruits.forEach((item, idx) => {
  console.log(`Index ${idx}: ${item}`);
});
