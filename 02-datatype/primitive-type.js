// Primitive types: string, number, boolean, undefined, null, symbol, bigint

let greeting = "hello";
let quantity = 42;
let isActive = true;
let notAssigned;
let empty = null;
let uniqueId = Symbol("id");
let hugeNumber = 123n;

console.log(typeof greeting); // string
console.log(typeof quantity); // number
console.log(typeof isActive); // boolean
console.log(typeof notAssigned); // undefined
console.log(typeof empty); // object (a well-known JS quirk)
console.log(typeof uniqueId); // symbol
console.log(typeof hugeNumber); // bigint

// Primitives are copied by value
let firstNumber = 5;
let secondNumber = 6;
firstNumber = secondNumber;
secondNumber = 10;

console.log(firstNumber); // 6 — unaffected by later change to secondNumber
console.log(secondNumber); // 10
