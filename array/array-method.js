// array method

const fruits = [
  "apple",
  "banana",
  "cherry",
  "orange",
  "mango",
  "date",
  "elderberry",
];

const foundIndex = fruits.findIndex((f) => f == "orange" || f == "mango");
console.log(foundIndex);

const filteredFruits = fruits.filter((f) => f == "orange" || f == "mango");
console.log(filteredFruits);

const slicedFruits = fruits.slice(2, 4);
console.log(slicedFruits);

const removedFruits = fruits.splice(2, 2, "kiwi", "grape");
console.log(removedFruits);
console.log(fruits);

const concatenatedFruits = fruits.concat(["papaya", "pear"]);
console.log(concatenatedFruits);

// Array map method
const mappedFruits = fruits.map((f) => {
  if (f == "banana") {
    return "banana is yellow";
  } else {
    return "N/A ";
  }
});
console.log(mappedFruits);

const mappedFruitsManual = [];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] == "banana") {
    mappedFruitsManual.push("banana is yellow");
  } else {
    mappedFruitsManual.push("N/A");
  }
}
console.log(mappedFruitsManual);

// Array reduce method
const numbers = [1, 2, 3, 4, 5];

const sumOfNumbers = numbers.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);
console.log(sumOfNumbers);

for (const num of numbers) {
  console.log(num);
}

// Array sort method
const unsortedNumbers = [5, 3, 8, 1, 9];
console.log([...unsortedNumbers].sort((x, y) => x - y)); // ascending
console.log([...unsortedNumbers].sort((x, y) => y - x)); // descending
