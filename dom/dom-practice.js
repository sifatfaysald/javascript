// DOM (Document Object Model) সিলেক্ট এবং ম্যানিপুলেট করার বেসিক পদ্ধতি
// এই ফাইলটা ব্রাউজারে চালাতে হবে — dom/index.html খুলে দেখুন

// --- Selecting elements ---
const box = document.getElementById("box");
const list = document.getElementById("list");
const allListItems = document.querySelectorAll("#list li"); // NodeList রিটার্ন করে

console.log(box); // <div id="box">...</div>
console.log(allListItems.length); // 2

// --- Reading and changing content ---
console.log(box.textContent); // "Hello DOM"
box.textContent = "DOM content changed with textContent";

// innerHTML দিয়ে HTML ট্যাগ সহ কনটেন্ট বসানো যায় (সাবধানে ব্যবহার করবেন, XSS এর ঝুঁকি থাকে)
// box.innerHTML = "<strong>Bold content</strong>";

// --- Changing style and class ---
box.style.color = "#333";
box.classList.add("highlighted"); // ক্লাস যোগ করা (CSS এ ডিফাইন করা না থাকলে ভিজ্যুয়াল ইফেক্ট পড়বে না)

// --- Creating and inserting new elements ---
const newItem = document.createElement("li");
newItem.textContent = "Item created via JS";
list.appendChild(newItem);

// --- Removing elements ---
// list.removeChild(list.firstElementChild); // প্রথম আইটেম মুছে ফেলা (আনকমেন্ট করে দেখুন)
