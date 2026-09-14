// JSON — JavaScript Object Notation, ডেটা আদান-প্রদানের জন্য সবচেয়ে বহুল ব্যবহৃত ফরম্যাট

const user = {
  name: "Sifat",
  age: 25,
  skills: ["JavaScript", "React"],
  isActive: true,
};

// object কে JSON string এ রূপান্তর করা — API তে পাঠানোর আগে যেটা লাগে
const jsonString = JSON.stringify(user);
console.log(jsonString);
console.log(typeof jsonString); // string

// সুন্দরভাবে ফরম্যাট করা JSON (indent দিয়ে)
console.log(JSON.stringify(user, null, 2));

// JSON string থেকে আবার object এ ফিরিয়ে আনা — API থেকে ডেটা পাওয়ার পর যেটা লাগে
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // Sifat
console.log(typeof parsedUser); // object

// deep clone করার একটা সহজ (কিন্তু function/undefined হারিয়ে যাওয়ার মতো সীমাবদ্ধতাসহ) উপায়
const original = { a: 1, nested: { b: 2 } };
const clone = JSON.parse(JSON.stringify(original));
clone.nested.b = 999;
console.log(original.nested.b); // 2 — original অক্ষত আছে
console.log(clone.nested.b); // 999
