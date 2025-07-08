let userRole = "admin";

if (userRole === "admin") {
  console.log("Access granted: Admin Panel");
} else if (userRole === "editor") {
  console.log("Access granted: Editor Panel");
} else if (userRole === "viewer") {
  console.log("Access granted: View Only");
} else {
  console.log("No access");
}

// Using switch
switch (userRole) {
  case "admin":
    console.log("Admin actions allowed.");
    break;
  case "editor":
    console.log("You can edit content.");
    break;
  default:
    console.log("Read-only access.");
}

// Ternary
let loggedIn = false;
let text = loggedIn ? "Dashboard" : "Login Page";
console.log(text);
