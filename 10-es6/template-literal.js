// Template literals — backtick strings with embedded expressions

const name = "Sifat";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);

// expressions inside ${}
console.log(`Next year I will be ${age + 1}.`);

// multi-line strings
const message = `Line one
Line two
Line three`;
console.log(message);

// tagged template (advanced)
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] ? `[${values[i]}]` : ""}`,
    ""
  );
}
console.log(highlight`Name: ${name}, Age: ${age}`);
