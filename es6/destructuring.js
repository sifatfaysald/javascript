// Destructuring — unpack values from arrays/objects into variables

// Array destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third);

const [firstNum, , thirdNum] = numbers; // skip an element
console.log(firstNum, thirdNum);

// Object destructuring
const user = { name: "Sifat", age: 25, role: "Developer" };
const { name, age } = user;
console.log(name, age);

// renaming while destructuring
const { name: userName } = user;
console.log(userName);

// default values
const { country = "Bangladesh" } = user;
console.log(country);

// nested destructuring
const profile = { user: { name: "Dipto", contact: { email: "d@example.com" } } };
const {
  user: {
    contact: { email },
  },
} = profile;
console.log(email);
