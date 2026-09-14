// `this` কী জিনিস — এটা কীভাবে কল হয়েছে তার উপর নির্ভর করে

// সাধারণ ফাংশনে this
function showThis() {
  console.log(this === globalThis); // true — কোনো object দিয়ে কল না করলে this গ্লোবাল অবজেক্টকে নির্দেশ করে
}
showThis(); // ব্রাউজারে this === window হতো

// object এর মেথডে this সেই object কে নির্দেশ করে
const user = {
  name: "Sifat",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
user.greet(); // Hi, I'm Sifat

// অ্যারো ফাংশনের নিজস্ব this নেই — বাইরের স্কোপ থেকে ধার করে
const userWithArrow = {
  name: "Dipto",
  greet: () => {
    console.log(`Hi, I'm ${this.name}`); // this এখানে user object কে নির্দেশ করে না
  },
};
userWithArrow.greet(); // Hi, I'm undefined

// call, apply, bind দিয়ে this পরিবর্তন করা
function introduce(city) {
  console.log(`I'm ${this.name} from ${city}`);
}

const person1 = { name: "Rafi" };
introduce.call(person1, "Dhaka"); // call — আর্গুমেন্ট আলাদা আলাদা করে দিতে হয়
introduce.apply(person1, ["Chittagong"]); // apply — আর্গুমেন্ট অ্যারে আকারে

const boundIntroduce = introduce.bind(person1);
boundIntroduce("Sylhet"); // bind — নতুন ফাংশন রিটার্ন করে, পরে কল করা যায়
