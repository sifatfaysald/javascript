// switch-case statement

const day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
}

console.log(dayName); // Tuesday

// Fall-through example (no break)
function checkFruit(fruit) {
  switch (fruit) {
    case "apple":
    case "banana":
      console.log(`${fruit} is a common fruit`);
      break;
    case "durian":
      console.log("durian smells strong!");
      break;
    default:
      console.log("unknown fruit");
  }
}

checkFruit("apple");
checkFruit("banana");
checkFruit("durian");
