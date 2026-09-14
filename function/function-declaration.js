// regular function declaration — hoisted, can be called before defined

console.log(hello()); // works because of hoisting

function hello() {
  return "Hello World";
}

// with parameters and default values
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("Sifat"));
console.log(greet());
