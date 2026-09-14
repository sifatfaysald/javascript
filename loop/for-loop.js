// for loop basics

for (let i = 1; i <= 5; i++) {
  console.log(`i = ${i}`);
}

// for...of — iterates over values (arrays, strings, etc.)
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// for...in — iterates over object keys
const language = {
  name: "JavaScript",
  type: "programming",
  year: 1995,
};

for (const property in language) {
  console.log(`${property}: ${language[property]}`);
}

// nested for loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
