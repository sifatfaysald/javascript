// Array basics

const fruits = ["apple", "banana", "cherry"];

console.log(fruits.length); // 3
console.log(fruits[0]); // apple
console.log(fruits[fruits.length - 1]); // cherry (last element)

fruits.push("orange"); // add to end
console.log(fruits);

fruits.pop(); // remove from end
console.log(fruits);

fruits.unshift("mango"); // add to beginning
console.log(fruits);

fruits.shift(); // remove from beginning
console.log(fruits);

console.log(Array.isArray(fruits)); // true
console.log(fruits.includes("banana")); // true
console.log(fruits.indexOf("cherry")); // index of cherry
