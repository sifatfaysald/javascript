// age validator
let age = 16;

if (age > 18) {
  console.log("you are an adult");
} else {
  console.log("you are minor");
}

// grade calculation:
let marks = -99;

if (marks < 0) {
  console.log(`Invalid Entry!!`);
} else if (marks >= 90) {
  console.log(`Grade A+ [${marks}]`);
} else if (marks >= 89) {
  console.log(`Grade B+ [${marks}]`);
} else if (marks >= 59) {
  console.log(`Grade C+ [${marks}]`);
} else {
  console.log(`Fail [${marks}]`);
}

// name game
let name = "Sifat";
if (name === "Sifat") {
  console.log(`Welcome Back ${name}`);
} else {
  console.log("Hello Stranger");
}

// Time greeting
let hour = 14;

if (hour < 0) {
  console.log("invalid entry");
} else if (hour >= 0 && hour <= 11) {
  console.log(`Good Morning [${hour}]`);
} else if (hour >= 12 && hour <= 17) {
  console.log(`Good Afternoon [${hour}]`);
} else if (hour >= 18 && hour <= 23) {
  console.log(`Good Evening [${hour}]`);
} else {
  console.log("good night");
}

// even odd
let num = 11;
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Max number method one:
let numOne = 20,
  numTwo = 50,
  numThree = 30;
let biggestNumber;

if (numOne >= numTwo && numOne >= numThree) {
  biggestNumber = numOne;
} else if (numTwo >= numOne && numTwo >= numThree) {
  biggestNumber = numTwo;
} else {
  biggestNumber = numThree;
}

console.log(`biggest number is = [${biggestNumber}]`);

// Max number method two:
let valueA = 50,
  valueB = 70,
  valueC = 100;
let maxNum = Math.max(valueA, valueB, valueC);
console.log(`max number is = [${maxNum}]`);
