console.log("=== 1️⃣ Basic try-catch ===");

try {
  let result = 10 / 0;
  console.log("Result:", result);

  // This will throw an error
  let name = undefined;
  console.log(name.toUpperCase()); // ❌ Cannot call toUpperCase on undefined

} catch (error) {
  console.log("❌ Error caught:", error.message);
}


console.log("\n=== 2️⃣ try-catch-finally ===");

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  } catch (err) {
    console.error("❗ Error:", err.message);
    return null;
  } finally {
    console.log("✅ Division attempt finished.");
  }
}

console.log("Division result:", divide(10, 0)); // triggers error
console.log("Division result:", divide(10, 2)); // works fine


console.log("\n=== 3️⃣ Custom Error Throwing ===");

function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("You must be at least 18 years old.");
    }
    console.log("Access granted.");
  } catch (e) {
    console.warn("⚠️", e.message);
  }
}

checkAge(16); // too young
checkAge(21); // allowed
