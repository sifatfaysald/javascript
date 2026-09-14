// Capstone Calculator
// এই ফাইলটাতে variable, function, condition, loop এর কনসেপ্ট নেই এমন কিছু নেই —
// পুরো প্র্যাকটিস বইয়ের যা কিছু শেখা হয়েছে সব একসাথে ব্যবহার করা হয়েছে

const previousOperandEl = document.getElementById("previousOperand");
const currentOperandEl = document.getElementById("currentOperand");

let currentOperand = "0";
let previousOperand = "";
let operator = undefined;

// --- Display আপডেট করা ---
function updateDisplay() {
  currentOperandEl.textContent = currentOperand;
  previousOperandEl.textContent = operator
    ? `${previousOperand} ${operator}`
    : "";
}

// --- সংখ্যা বাটনে ক্লিক করলে ---
function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) {
    return; // একটা সংখ্যায় একাধিক দশমিক বিন্দু হতে পারবে না
  }
  if (currentOperand === "0" && number !== ".") {
    currentOperand = number; // শুরুতে থাকা 0 কে রিপ্লেস করা
  } else {
    currentOperand += number;
  }
}

// --- অপারেটর বাটনে ক্লিক করলে ---
function chooseOperator(selectedOperator) {
  if (currentOperand === "") return;

  if (previousOperand !== "") {
    compute(); // আগের হিসাব থাকলে আগে সেটা শেষ করা, তারপর নতুন অপারেটর সেট করা
  }

  operator = selectedOperator;
  previousOperand = currentOperand;
  currentOperand = "";
}

// --- হিসাব করা ---
function compute() {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  let result;
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current === 0 ? "Error" : prev / current;
      break;
    case "%":
      result = prev % current;
      break;
    default:
      return;
  }

  currentOperand = result.toString();
  operator = undefined;
  previousOperand = "";
}

// --- সব রিসেট করা ---
function clearAll() {
  currentOperand = "0";
  previousOperand = "";
  operator = undefined;
}

// --- শেষ ডিজিট মুছে ফেলা ---
function deleteLast() {
  currentOperand = currentOperand.toString().slice(0, -1);
  if (currentOperand === "") {
    currentOperand = "0";
  }
}

// --- বাটনগুলোর সাথে event যুক্ত করা ---
document.querySelectorAll("[data-number]").forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.dataset.number);
    updateDisplay();
  });
});

document.querySelectorAll("[data-operator]").forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperator(button.dataset.operator);
    updateDisplay();
  });
});

document.querySelector('[data-action="equals"]').addEventListener("click", () => {
  compute();
  updateDisplay();
});

document.querySelector('[data-action="clear"]').addEventListener("click", () => {
  clearAll();
  updateDisplay();
});

document.querySelector('[data-action="delete"]').addEventListener("click", () => {
  deleteLast();
  updateDisplay();
});

// --- কীবোর্ড দিয়েও ব্যবহার করা যায় ---
document.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") {
    appendNumber(event.key);
  } else if (event.key === ".") {
    appendNumber(".");
  } else if (["+", "-", "*", "/", "%"].includes(event.key)) {
    chooseOperator(event.key);
  } else if (event.key === "Enter" || event.key === "=") {
    compute();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key === "Escape") {
    clearAll();
  } else {
    return;
  }
  updateDisplay();
});

updateDisplay();
