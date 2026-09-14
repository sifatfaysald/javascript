// try/catch/finally দিয়ে error handling

try {
  const result = JSON.parse("{invalid json}"); // এটা এরর দিবে
  console.log(result);
} catch (error) {
  console.log("Something went wrong:", error.message);
} finally {
  console.log("This always runs, error হোক বা না হোক");
}

// নিজে থেকে error তৈরি করে throw করা
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // এখানে এসে throw হবে
} catch (error) {
  console.log("Caught:", error.message);
}

// কাস্টম Error class বানানো
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError("Age cannot be negative");
  }
  return age;
}

try {
  validateAge(-5);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
