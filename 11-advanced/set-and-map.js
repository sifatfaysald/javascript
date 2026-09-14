// Set — শুধু ইউনিক ভ্যালু রাখে, ডুপ্লিকেট থাকতে পারে না

const uniqueNumbers = new Set([1, 2, 2, 3, 3, 3, 4]);
console.log(uniqueNumbers); // Set(4) {1, 2, 3, 4}
console.log(uniqueNumbers.size); // 4
console.log(uniqueNumbers.has(3)); // true

uniqueNumbers.add(10);
uniqueNumbers.delete(1);
console.log([...uniqueNumbers]); // অ্যারেতে কনভার্ট করা

// অ্যারে থেকে ডুপ্লিকেট বাদ দেওয়ার জনপ্রিয় ট্রিক
const numbersWithDuplicates = [1, 1, 2, 2, 3, 4, 4];
const distinctNumbers = [...new Set(numbersWithDuplicates)];
console.log(distinctNumbers); // [1, 2, 3, 4]

// Map — object এর মতো কিন্তু key হিসেবে যেকোনো টাইপ (এমনকি object ও) ব্যবহার করা যায়

const userRoles = new Map();
userRoles.set("sifat", "admin");
userRoles.set("dipto", "editor");

console.log(userRoles.get("sifat")); // admin
console.log(userRoles.has("dipto")); // true
console.log(userRoles.size); // 2

for (const [name, role] of userRoles) {
  console.log(`${name}: ${role}`);
}

userRoles.delete("dipto");
console.log([...userRoles.keys()]); // ["sifat"]
