// --- Local Scope Example ---
function myRoom() {
    let secretBox = 'Money';
    console.log('Inside myRoom:', secretBox); // This works: secretBox is accessible inside the function
}

myRoom();
// console.log(secretBox); // ❌ This would cause an error: secretBox is not accessible outside myRoom()


// --- Global Scope Example ---
let everyoneKnows = 'I love tomato';

function tellSecret() {
    console.log('Inside tellSecret:', everyoneKnows); // ✅ This works: global variables are accessible inside functions
}

tellSecret();
console.log('Outside function:', everyoneKnows); // ✅ This also works: we're accessing a global variable


// --- Block Scope Example ---
{
    let innerBox = 'hidden';
    console.log('Inside block:', innerBox); // ✅ This works: innerBox is accessible inside this block
}

// console.log(innerBox); // ❌ Error: innerBox is not accessible outside the block


// --- Function Scope Example ---
function showMessage() {
    let message = 'Hello, world!';
    console.log('Inside showMessage:', message); // ✅ Accessible inside the function
}

showMessage();
// console.log(message); // ❌ Error: message is not defined outside showMessage()
