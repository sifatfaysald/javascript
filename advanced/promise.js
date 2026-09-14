// Promise — একটা ভবিষ্যতের ভ্যালুর প্রতিশ্রুতি, যেটা resolve (সফল) বা reject (ব্যর্থ) হতে পারে

function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Age ${age} is allowed`);
      } else {
        reject(`Age ${age} is not allowed`);
      }
    }, 500);
  });
}

checkAge(20)
  .then((result) => {
    console.log(result); // Age 20 is allowed
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Check complete");
  });

checkAge(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // Age 15 is not allowed

// একসাথে অনেকগুলো Promise চালানো
const promise1 = checkAge(25);
const promise2 = checkAge(30);

Promise.all([promise1, promise2]).then((results) => {
  console.log("All resolved:", results);
});
