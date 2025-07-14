// --- Example 1: Age Check ---
let age = 18;

if (age >= 18) {
    console.log("You are an adult."); // ✅ This will run because age is 18
} else {
    console.log("You are not an adult."); // ❌ This won't run
}


// --- Example 2: Grade Checker ---
let marks = 75;

if (marks >= 80) {
    console.log("Grade: A+"); // ❌ Not true for 75
} else if (marks >= 70) {
    console.log("Grade: A"); // ✅ This will run
} else if (marks >= 60) {
    console.log("Grade: B"); // ❌ Skipped
} else if (marks >= 50) {
    console.log("Grade: C"); // ❌ Skipped
} else {
    console.log("Grade: F"); // ❌ Skipped
}


// --- Example 3: Taka to Poisha (With Condition) ---
let taka = 10;

if (taka > 0) {
    let poisha = taka * 100;
    console.log(taka + " Taka = " + poisha + " Poisha"); // ✅ 10 Taka = 1000 Poisha
} else {
    console.log("Invalid amount!"); // ❌ Won't run
}


// --- Example 4: Check if Number is Even or Odd ---
let number = 7;

if (number % 2 === 0) {
    console.log(number + " is even."); // ❌ 7 is not even
} else {
    console.log(number + " is odd."); // ✅ 7 is odd
}
