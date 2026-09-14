// async/await — Promise কে আরও সহজভাবে, সিঙ্ক্রোনাস কোডের মতো করে লেখার উপায়

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Sifat" });
    }, 500);
  });
}

async function loadUser() {
  console.log("Loading user...");
  const user = await fetchData(); // Promise resolve না হওয়া পর্যন্ত এখানে থেমে থাকে
  console.log("User loaded:", user);
  return user;
}

loadUser().then((user) => {
  console.log("Got user in .then:", user);
});

// try/catch দিয়ে error handle করা
function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Network failed"));
    }, 300);
  });
}

async function loadUserSafely() {
  try {
    const user = await fetchDataWithError();
    console.log(user);
  } catch (error) {
    console.log("Caught error:", error.message);
  }
}

loadUserSafely();

// একাধিক async কাজ একসাথে চালানো
async function loadMultiple() {
  const [userA, userB] = await Promise.all([fetchData(), fetchData()]);
  console.log("Both loaded:", userA, userB);
}

loadMultiple();
