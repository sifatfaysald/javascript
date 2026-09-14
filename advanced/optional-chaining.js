// Optional chaining (?.) — nested object এর গভীরে থাকা প্রপার্টি safely access করা

const user = {
  name: "Sifat",
  address: {
    city: "Dhaka",
  },
};

console.log(user.address?.city); // Dhaka
console.log(user.address?.postCode); // undefined — এরর না দিয়ে undefined রিটার্ন করে

// user.contact.email — এটা লিখলে এরর দিত, কারণ user.contact আসলে নেই
console.log(user.contact?.email); // undefined

// ফাংশন কল করার সময়ও ব্যবহার করা যায়
const settings = {
  save() {
    console.log("Settings saved");
  },
};

settings.save?.(); // Settings saved
settings.load?.(); // কিছুই হবে না, এরর ও দিবে না, কারণ load নেই

// অ্যারে এলিমেন্ট access করার সময়ও কাজ করে
const users = [{ name: "Sifat" }];
console.log(users[0]?.name); // Sifat
console.log(users[5]?.name); // undefined

// nullish coalescing (??) এর সাথে মিলিয়ে ডিফল্ট ভ্যালু দেওয়া
const city = user.address?.city ?? "Unknown";
const postCode = user.address?.postCode ?? "N/A";
console.log(city, postCode); // Dhaka N/A
