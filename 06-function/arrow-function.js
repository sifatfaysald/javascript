// arrow function — shorter syntax, no its own `this`

const sayHelloArrow = () => {
  return "Hello World from an arrow function";
};
console.log(sayHelloArrow());

// implicit return (no braces, no `return` keyword needed)
const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(sum(5, 10));

const cars = () => {
  return ["BMW", "Volvo", "Mini"];
};
console.log(cars());

// arrow function with a single parameter (parens optional)
const square = (n) => n * n;
console.log(square(4));
