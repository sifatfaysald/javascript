// Closure — একটা ফাংশন তার বাইরের স্কোপের ভ্যারিয়েবল মনে রাখতে পারে, এমনকি বাইরের ফাংশন শেষ হয়ে গেলেও

function makeCounter() {
  let count = 0; // এই ভ্যারিয়েবলটা বাইরে থেকে সরাসরি access করা যায় না

  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = makeCounter(); // সম্পূর্ণ আলাদা count নিয়ে নতুন closure
console.log(counter2()); // 1

// বাস্তব উদাহরণ: প্রতিটা ইউজারের জন্য আলাদা ব্যাংক ব্যালেন্স মনে রাখা
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Insufficient balance";
      }
      balance -= amount;
      return balance;
    },
  };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.deposit(500)); // 1500
console.log(myAccount.withdraw(2000)); // Insufficient balance
console.log(myAccount.withdraw(300)); // 1200
