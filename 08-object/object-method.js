// built-in object methods

const user = {
  name: "Sifat",
  role: "Developer",
  age: 25,
};

console.log(Object.keys(user)); // ["name", "role", "age"]
console.log(Object.values(user)); // ["Sifat", "Developer", 25]
console.log(Object.entries(user)); // [["name","Sifat"], ["role","Developer"], ["age",25]]

// merging objects
const extra = { active: true };
const merged = Object.assign({}, user, extra);
console.log(merged);

// spread syntax achieves the same, more concisely
const merged2 = { ...user, ...extra };
console.log(merged2);

// object shorthand & method
const name = "Dipto";
const person = {
  name, // shorthand for name: name
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};
console.log(person.greet());
