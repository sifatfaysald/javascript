// Ternary operator: condition ? valueIfTrue : valueIfFalse

const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult

// Chained ternary (use sparingly — readability suffers fast)
const marks = 65;
const grade = marks >= 80 ? "A+" : marks >= 60 ? "A" : marks >= 40 ? "C" : "F";
console.log(grade); // A

// Ternary inside a template literal
const isLoggedIn = false;
console.log(`User is ${isLoggedIn ? "online" : "offline"}`);
