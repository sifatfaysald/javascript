# জাভাস্ক্রিপ্ট প্র্যাকটিস বুক (বাংলায়)

এই রিপোজিটরিটা বানিয়েছি জাভাস্ক্রিপ্ট শেখার জন্য, একদম শুরু থেকে। প্রতিটা টপিকের জন্য আলাদা ফোল্ডার আছে, আর সেই ফোল্ডারের ভেতরে ছোট ছোট প্র্যাকটিস ফাইল আছে যেখানে রিয়েল কোড দিয়ে জিনিসটা বোঝানো হয়েছে। শুধু পড়লে হবে না, নিচের লিংকে ক্লিক করে ফাইলটা খুলুন, কোড পড়ুন, আর নিজে `node file-name.js` দিয়ে রান করে দেখুন কী প্রিন্ট হয়।

কোনো ক্রম মানতে চাইলে উপর থেকে নিচে অনুসরণ করুন, টপিকগুলো একটার পর একটা সাজানো হয়েছে যাতে আগেরটা বুঝলে পরেরটা সহজ লাগে।

---

## ১. Variable (ভ্যারিয়েবল)

জাভাস্ক্রিপ্টে ডেটা রাখার সবচেয়ে বেসিক জিনিস হলো ভ্যারিয়েবল — `var`, `let`, `const`। এই ফোল্ডারে দেখবেন কোনটা কখন ব্যবহার করতে হয়, স্কোপ কী জিনিস, হোইস্টিং কীভাবে কাজ করে, আর কনসোলে জিনিস প্রিন্ট করার বিভিন্ন উপায়।

- [variable.js](./01-variable/variable.js) — `var`, `let`, `const` দিয়ে ভ্যারিয়েবল বানানো ও রিঅ্যাসাইন করা
- [scoped-variable.js](./01-variable/scoped-variable.js) — লোকাল, গ্লোবাল, ব্লক আর ফাংশন স্কোপ কী জিনিস
- [hoisting.js](./01-variable/hoisting.js) — হোইস্টিং মানে কী, `var`/`let`/`const` আর ফাংশনের ক্ষেত্রে এটা কীভাবে আলাদা আচরণ করে
- [print.js](./01-variable/print.js) — `console.log`, `console.warn`, `console.table` ইত্যাদি দিয়ে আউটপুট দেখানোর বিভিন্ন পদ্ধতি

## ২. Data Type (ডেটা টাইপ)

জাভাস্ক্রিপ্টে ডেটা মূলত দুই ধরনের — primitive (string, number, boolean...) আর reference (array, object)। দুটোর আচরণ সম্পূর্ণ আলাদা, বিশেষ করে কপি করার সময়।

- [primitive-type.js](./02-datatype/primitive-type.js) — string, number, boolean, null, undefined, symbol, bigint
- [reference-type.js](./02-datatype/reference-type.js) — array আর object কেন "reference" দিয়ে কপি হয়, value টাইপের সাথে পার্থক্য
- [type-conversion.js](./02-datatype/type-conversion.js) — এক টাইপ থেকে আরেক টাইপে কনভার্ট করা (explicit) আর অটোমেটিক কনভার্সন (coercion)

## ৩. Operator (অপারেটর)

হিসাব-নিকাশ আর তুলনা করার জন্য যেসব চিহ্ন ব্যবহার হয়।

- [arithmetic-operator.js](./03-operator/arithmetic-operator.js) — যোগ, বিয়োগ, গুণ, ভাগ, ভাগশেষ, পাওয়ার
- [comparison-operator.js](./03-operator/comparison-operator.js) — `==` বনাম `===`, বড়-ছোট তুলনা
- [logical-operator.js](./03-operator/logical-operator.js) — `&&`, `||`, `!`, আর `??` (nullish coalescing)

## ৪. Condition (কন্ডিশন)

কোন পরিস্থিতিতে কোন কোড রান হবে সেটা ঠিক করার জন্য।

- [if-else.js](./04-condition/if-else.js) — `if`, `else if`, `else` দিয়ে বেসিক সিদ্ধান্ত নেওয়া
- [switch-case.js](./04-condition/switch-case.js) — অনেকগুলো অপশনের মধ্যে থেকে একটা বেছে নেওয়ার আরেকটা উপায়
- [ternary-operator.js](./04-condition/ternary-operator.js) — এক লাইনে `if-else` লেখার শর্টকাট
- [practice.js](./04-condition/practice.js) — বয়স যাচাই, গ্রেড হিসাব, শুভেচ্ছা বার্তা — বাস্তব উদাহরণ দিয়ে কন্ডিশন প্র্যাকটিস

## ৫. Loop (লুপ)

একই কাজ বারবার করার জন্য।

- [for-loop.js](./05-loop/for-loop.js) — `for`, `for...of`, `for...in` দিয়ে লুপ চালানো
- [while-loop.js](./05-loop/while-loop.js) — `while` আর `do...while` এর পার্থক্য
- [loop-control.js](./05-loop/loop-control.js) — `break` আর `continue` দিয়ে লুপ কন্ট্রোল করা

## ৬. Function (ফাংশন)

কোড রিইউজ করার সবচেয়ে গুরুত্বপূর্ণ টুল।

- [function-declaration.js](./06-function/function-declaration.js) — সাধারণ ফাংশন ডিক্লেয়ারেশন, ডিফল্ট প্যারামিটার
- [function-expression.js](./06-function/function-expression.js) — ফাংশন এক্সপ্রেশন আর IIFE
- [arrow-function.js](./06-function/arrow-function.js) — অ্যারো ফাংশন সিনট্যাক্স আর ইমপ্লিসিট রিটার্ন

## ৭. Array (অ্যারে)

লিস্ট আকারে ডেটা রাখা আর সেটা নিয়ে কাজ করা।

- [array-basic.js](./07-array/array-basic.js) — `push`, `pop`, `shift`, `unshift`, `includes`
- [array-method.js](./07-array/array-method.js) — `map`, `filter`, `reduce`, `slice`, `splice`, `sort` ইত্যাদি ইম্পর্ট্যান্ট মেথড

## ৮. Object (অবজেক্ট)

রিয়েল-লাইফ জিনিসকে কী-ভ্যালু আকারে রিপ্রেজেন্ট করা।

- [object-basic.js](./08-object/object-basic.js) — প্রপার্টি অ্যাক্সেস, যোগ ও মুছে ফেলা, `for...in`
- [object-method.js](./08-object/object-method.js) — `Object.keys`, `Object.values`, `Object.entries`, spread দিয়ে মার্জ করা

## ৯. String (স্ট্রিং)

টেক্সট নিয়ে কাজ করার মেথডগুলো।

- [string-method.js](./09-string/string-method.js) — `trim`, `slice`, `split`, `replace`, template literal, `padStart` ইত্যাদি

## ১০. ES6+ (মডার্ন জাভাস্ক্রিপ্ট ফিচার)

আধুনিক জাভাস্ক্রিপ্ট লেখাকে সহজ ও ছোট করার ফিচারগুলো।

- [destructuring.js](./10-es6/destructuring.js) — অ্যারে ও অবজেক্ট থেকে সরাসরি ভ্যারিয়েবলে ভ্যালু বের করে আনা
- [spread-rest.js](./10-es6/spread-rest.js) — `...` দিয়ে ভ্যালু ছড়িয়ে দেওয়া (spread) বা একত্র করা (rest)
- [template-literal.js](./10-es6/template-literal.js) — ব্যাকটিক (`` ` ``) দিয়ে সুন্দরভাবে স্ট্রিং লেখা

## ১১. Advanced (একটু গভীরে)

বেসিক শেখার পর যেসব জিনিস প্রায়ই ধোঁয়াশা লাগে, সেগুলো এখানে আলাদা করে দেখানো হয়েছে।

- [closure.js](./11-advanced/closure.js) — একটা ফাংশন কীভাবে তার বাইরের স্কোপের ভ্যারিয়েবল মনে রাখে
- [this-keyword.js](./11-advanced/this-keyword.js) — `this` কোথায় কী নির্দেশ করে, আর `call`/`apply`/`bind` দিয়ে সেটা কীভাবে বদলানো যায়
- [callback-function.js](./11-advanced/callback-function.js) — ফাংশনকে আরেকটা ফাংশনে পাঠানো, error-first callback প্যাটার্ন
- [promise.js](./11-advanced/promise.js) — resolve/reject, `.then`/`.catch`/`.finally`, `Promise.all`
- [async-await.js](./11-advanced/async-await.js) — Promise কে সহজভাবে লেখার আধুনিক উপায়
- [try-catch-error.js](./11-advanced/try-catch-error.js) — এরর ধরা, নিজে এরর তৈরি করা, কাস্টম Error class
- [json.js](./11-advanced/json.js) — `JSON.stringify` আর `JSON.parse`, ডেটা আদান-প্রদানের ফরম্যাট
- [set-and-map.js](./11-advanced/set-and-map.js) — ইউনিক ভ্যালুর জন্য `Set`, key-value এর জন্য `Map`
- [optional-chaining.js](./11-advanced/optional-chaining.js) — `?.` দিয়ে nested object safely access করা

(IIFE — Immediately Invoked Function Expression — এটা কভার করা হয়েছে [function-expression.js](./06-function/function-expression.js) এর মধ্যে।)

## ১২. DOM ও Event

ব্রাউজারে একটা পেজের এলিমেন্টগুলো (div, button, input...) জাভাস্ক্রিপ্ট দিয়ে ধরা, পাল্টানো আর ইউজার ইন্টারঅ্যাকশনে সাড়া দেওয়ার প্র্যাকটিস। এই ফাইলগুলো Node দিয়ে না, ব্রাউজারে [dom/index.html](./12-dom/index.html) খুলে দেখতে হবে।

- [dom-practice.js](./12-dom/dom-practice.js) — এলিমেন্ট সিলেক্ট করা, কনটেন্ট ও স্টাইল পাল্টানো, নতুন এলিমেন্ট বানানো ও মোছা
- [event-practice.js](./12-dom/event-practice.js) — click, input event, আর event delegation (একটা প্যারেন্টে listener বসিয়ে সব চাইল্ডের ক্লিক ধরা)
- [app.js](./app.js) — [index.html](./index.html) এর সাথে যুক্ত, বাটনে ক্লিক করলে কী হয় তার একটা ছোট উদাহরণ

## ক্যাপস্টোন প্রজেক্ট: ক্যালকুলেটর

এতক্ষণ যা শেখা হলো (variable, function, condition, DOM, event) সব একসাথে ব্যবহার করে একটা কাজ করা ক্যালকুলেটর বানানো হয়েছে। [capstone-calculator/index.html](./13-capstone-calculator/index.html) ব্রাউজারে খুলুন, মাউস দিয়ে বাটনে ক্লিক করে বা কীবোর্ড দিয়ে টাইপ করে হিসাব করা যাবে।

- [index.html](./13-capstone-calculator/index.html) — ক্যালকুলেটরের UI
- [style.css](./13-capstone-calculator/style.css) — ডিজাইন
- [script.js](./13-capstone-calculator/script.js) — হিসাব করার লজিক, বাটন ও কীবোর্ড event হ্যান্ডলিং

## টিপস অ্যান্ড ট্রিকস

কাজ করার সময় যেসব ছোট ছোট জিনিস মনে রাখলে কোড ক্লিন থাকে এবং ভুল কম হয়, সেগুলো এক জায়গায় লেখা আছে [tips-and-tricks.md](./tips-and-tricks.md) ফাইলে।

---

## কীভাবে রান করবেন

যেকোনো ফাইল Node.js দিয়ে রান করতে পারবেন:

```bash
node variable/variable.js
```

অথবা VS Code-এ ফাইলটা খুলে "Run" করলেও কনসোলে আউটপুট দেখতে পাবেন।

তবে `dom/` আর `capstone-calculator/` ফোল্ডারের ফাইলগুলো Node দিয়ে রান হবে না, কারণ ওগুলোতে `document` ব্যবহার হয়েছে যেটা শুধু ব্রাউজারে থাকে। এই দুটোর `index.html` ফাইল সরাসরি ব্রাউজারে খুলুন।


শুধু কোড পড়ে বুঝে গেলাম ভেবে পরের ফাইলে চলে যাবেন না। প্রতিটা ফাইলে কমেন্ট আউট করা কিছু লাইন আছে (`// console.log(...)`), ওগুলো আনকমেন্ট করে দেখুন এরর কেন আসে, তাহলে জিনিসটা মাথায় গেঁথে যাবে। নিজে ভ্যারিয়েবলের ভ্যালু পাল্টে বা নতুন উদাহরণ বানিয়ে এক্সপেরিমেন্ট করুন, এভাবেই আসল শেখা হয়।
