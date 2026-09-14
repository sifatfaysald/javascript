// Logical operators: &&, ||, !, and nullish coalescing (??)

const age = 20;
const hasID = true;

console.log(age >= 18 && hasID); // true — both must be true
console.log(age < 18 || hasID); // true — at least one is true
console.log(!hasID); // false — negation

// Short-circuit evaluation
const username = "" || "Guest"; // "" is falsy, so falls back to "Guest"
console.log(username);

// Nullish coalescing only falls back on null/undefined, not other falsy values
const score = 0;
console.log(score ?? 100); // 0 — 0 is not null/undefined
console.log(null ?? 100); // 100
console.log(undefined ?? 100); // 100
