// String methods

const text = "  Hello, JavaScript World!  ";

console.log(text.trim()); // removes leading/trailing whitespace
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.trim().length);

console.log(text.includes("JavaScript")); // true
console.log(text.indexOf("World")); // index of "World"
console.log(text.slice(2, 7)); // "Hello"
console.log(text.trim().split(" ")); // splits into an array of words
console.log(text.trim().replace("World", "Everyone"));

// template literals for building strings
const name = "Sifat";
const greeting = `Hello, ${name}! Today is a great day to learn ${"JS".toUpperCase()}.`;
console.log(greeting);

// repeat & padding
console.log("ab".repeat(3)); // "ababab"
console.log("5".padStart(3, "0")); // "005"
