// Spread (...) expands values, Rest (...) collects values

// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// Spread in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2);

// Spread to pass array items as function arguments
function sum3(x, y, z) {
  return x + y + z;
}
console.log(sum3(...[1, 2, 3]));

// Rest parameters — collect remaining arguments into an array
function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

// Rest in destructuring
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail);
