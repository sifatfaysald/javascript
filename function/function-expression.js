// named function expression — NOT hoisted the same way as a declaration
let sayHello = function () {
  return "Hello World from a function expression";
};
console.log(sayHello());

// anonymous function returned from another function
function outerFunction() {
  return function () {
    console.log("Hello from the returned inner function");
  };
}

const innerFunction = outerFunction();
innerFunction();

// IIFE — Immediately Invoked Function Expression
(function () {
  console.log("IIFE runs immediately");
})();
