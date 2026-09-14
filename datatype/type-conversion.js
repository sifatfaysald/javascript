// Type conversion (explicit) and type coercion (implicit)

// Explicit conversion
console.log(String(123)); // "123"
console.log(Number("123")); // 123
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true

// Implicit coercion
console.log("5" + 5); // "55" — number is coerced to string
console.log("5" - 1); // 4 — string is coerced to number
console.log("5" * "2"); // 10
console.log(1 + true); // 2 — true becomes 1
console.log(1 + null); // 1 — null becomes 0
console.log(1 + undefined); // NaN

// Loose vs strict equality
console.log(0 == "0"); // true — coerced
console.log(0 === "0"); // false — different types
console.log(null == undefined); // true
console.log(null === undefined); // false
