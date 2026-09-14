// --- Local (Function) Scope Example ---
function myRoom() {
  let secretBox = "Money";
  console.log("Inside myRoom:", secretBox); // ✅ accessible inside the function
}

myRoom();
// console.log(secretBox); // ❌ Error: secretBox is not accessible outside myRoom()

// --- Global Scope Example ---
let everyoneKnows = "I love tomato";

function tellSecret() {
  console.log("Inside tellSecret:", everyoneKnows); // ✅ global variables are accessible inside functions
}

tellSecret();
console.log("Outside function:", everyoneKnows);

// --- Block Scope Example ---
{
  let innerBox = "hidden";
  console.log("Inside block:", innerBox); // ✅ accessible inside this block
}
// console.log(innerBox); // ❌ Error: innerBox is not accessible outside the block

// --- Function Scope Example ---
function showMessage() {
  let message = "Hello, world!";
  console.log("Inside showMessage:", message);
}

showMessage();
// console.log(message); // ❌ Error: message is not defined outside showMessage()

// --- var is function-scoped, not block-scoped ---
function varScope() {
  if (true) {
    var x = "I leak out of the block";
  }
  console.log(x); // ✅ still accessible — var ignores block scope
}
varScope();
