// Different ways to print/output values in JavaScript

console.log("Simple log message");
console.info("Info level message");
console.warn("This is a warning");
console.error("This is an error");

// Template literals for formatted printing
const name = "Sifat";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

// Printing multiple values
console.log("name:", name, "age:", age);

// console.table for arrays/objects
const users = [
  { name: "Sifat", role: "Developer" },
  { name: "Dipto", role: "Designer" },
];
console.table(users);

// Grouped logs
console.group("User Details");
console.log("Name:", name);
console.log("Age:", age);
console.groupEnd();
