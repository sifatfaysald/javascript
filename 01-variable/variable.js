// var, let, const — declaration and reassignment

var lang = "Bangla";

function learn(topic) {
  lang = topic;

  if (true) {
    let score = 5;
    score = 10; // let can be reassigned
    console.log(score);
  }

  if (true) {
    const settings = {
      volume: 5,
    };
    settings.volume = 6; // const object's properties can still change
    console.log(settings);
  }

  console.log(`I am learning ${topic}`);
}

learn("JavaScript");
console.log(`Current language is ${lang}`);

// const primitive cannot be reassigned
const pi = 3.1416;
// pi = 3.14; // ❌ TypeError: Assignment to constant variable.
console.log(pi);
