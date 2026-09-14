// Event handling — ইউজারের অ্যাকশনে (click, input, ইত্যাদি) কীভাবে রেসপন্স করতে হয়
// এই ফাইলটা ব্রাউজারে চালাতে হবে — dom/index.html খুলে দেখুন

const colorBtn = document.getElementById("colorBtn");
const box = document.getElementById("box");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const list = document.getElementById("list");
const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

// --- বেসিক click event ---
const colors = ["#fff3cd", "#d1e7dd", "#cfe2ff", "#f8d7da"];
let colorIndex = 0;

colorBtn.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % colors.length;
  box.style.background = colors[colorIndex];
});

// --- লিস্টে নতুন আইটেম যোগ করা ---
let itemCount = list.children.length;

addBtn.addEventListener("click", () => {
  itemCount++;
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemCount}`;
  list.appendChild(newItem);
});

removeBtn.addEventListener("click", () => {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});

// --- input event দিয়ে লাইভ টাইপিং দেখা ---
textInput.addEventListener("input", (event) => {
  output.textContent = event.target.value || "এখানে যা লিখবেন তাই দেখাবে";
});

// --- Event delegation ---
// প্রতিটা <li> তে আলাদা আলাদা listener না বসিয়ে, প্যারেন্ট <ul> তে একটাই listener বসানো
// ভবিষ্যতে নতুন যোগ হওয়া <li> এর জন্যও এটা কাজ করবে
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
    event.target.style.textDecoration = "line-through";
  }
});
