// --- Example 1: Age Check ---
let age = 18;

if (age >= 18) {
  console.log("You are an adult."); // ✅ runs because age is 18
} else {
  console.log("You are not an adult.");
}

// --- Example 2: Grade Checker ---
let marks = 75;

if (marks >= 80) {
  console.log("Grade: A+");
} else if (marks >= 70) {
  console.log("Grade: A"); // ✅ runs
} else if (marks >= 60) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// --- Example 3: Taka to Poisha (with condition) ---
let taka = 10;

if (taka > 0) {
  let poisha = taka * 100;
  console.log(taka + " Taka = " + poisha + " Poisha");
} else {
  console.log("Invalid amount!");
}

// --- Example 4: Even or Odd ---
let number = 7;

if (number % 2 === 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd."); // ✅ runs
}
