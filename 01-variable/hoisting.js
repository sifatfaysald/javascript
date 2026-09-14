// --- Variable Hoisting with var ---
console.log(greeting); // ✅ undefined — var is hoisted but value is not assigned yet
var greeting = "Hello!";
console.log(greeting); // Hello!

// --- Variable Hoisting with let ---
// The next line causes an error if you uncomment it:
// console.log(name); // ❌ ReferenceError — let is hoisted but not initialized (TDZ)
let name = "John";
console.log(name); // ✅ John

// --- Variable Hoisting with const ---
// This also causes an error if uncommented:
// console.log(age); // ❌ ReferenceError — const is hoisted but not initialized
const age = 25;
console.log(age); // ✅ 25

// --- Function Declaration Hoisting ---
sayHi(); // ✅ Works — function is hoisted

function sayHi() {
  console.log("Hi from function declaration!");
}

// --- Function Expression with var ---
// This line will throw an error if uncommented:
// sayHello(); // ❌ TypeError — sayHello is undefined at this point
var sayHello = function () {
  console.log("Hello from function expression!");
};
sayHello(); // ✅ Works after declaration

// --- Function Expression with let ---
// This line will throw an error if uncommented:
// wave(); // ❌ ReferenceError — wave is in TDZ
let wave = function () {
  console.log("Wave from let function expression!");
};
wave(); // ✅ Works after declaration
