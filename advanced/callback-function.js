// Callback function — একটা ফাংশনকে আরেকটা ফাংশনে আর্গুমেন্ট হিসেবে পাঠানো, পরে সেটা কল করার জন্য

function greetUser(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

greetUser("Sifat", function () {
  console.log("Callback executed after greeting");
});

// asynchronous callback — সাথে সাথে রান হয় না
console.log("Start");

setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

console.log("End"); // এটা "This runs after 1 second" এর আগে প্রিন্ট হবে

// error-first callback প্যাটার্ন (Node.js স্টাইল)
function fetchUserData(userId, callback) {
  if (!userId) {
    callback(new Error("userId is required"), null);
    return;
  }
  callback(null, { id: userId, name: "Sifat" });
}

fetchUserData(null, (err, data) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("Data:", data);
});

fetchUserData(1, (err, data) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("Data:", data);
});
