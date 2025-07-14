// age validator
let age = 16;

if (age > 18){
    console.log('you are an adult');
} else {
    console.log('you are minor');
}


// grade calculation:
let marks = -99;

if(marks < 0){
    console.log(`Invalid Entry!!`)
}
else if(marks >= 90){
    console.log(`Grade A+ [${marks}]`);
} else if (marks >= 89){
    console.log(`Grade B+ [${marks}]`);
} else if (marks >= 59){
    console.log(`Grade C+ [${marks}]`);
} else {
    console.log(`Fail [${marks}]`);
}

// name game
let name = 'Sifat';
if (name === 'Sifat'){
    console.log(`Welcome Back ${name}`);
} else {
    console.log('Hello Stranger');
}

// Time gritting
let hour = 14;

if (hour <0){
    console.log('invalid entry')
}
else if(hour >= 0 && hour <= 11){
    console.log(`Good Morning [${hour}]`)
} else if (hour >= 12 && hour <= 17){
    console.log(`Good Afternoon [${hour}]`)
} else if (hour >= 18 && hour <= 23) {
    console.log(`Good Evening [${hour}]`)
} else {
    console.log('good night')
}

// even odd
let num = 11;
if (num % 2 === 0){
    console.log('even')
} else {
    console.log('odd');
}

// Max number method one:
let a = 20, b = 50, c = 30;
let biggestNumber;

if(a >= b && a >= c){
    biggestNumber = a;
} else if (b >= a && b >= c){
    biggestNumber = b;
} else {
    biggestNumber = c;
}

console.log(`biggest number is = [${biggestNumber}]`)

// Max number method two:
let x = 50, y = 70, z = 100;
let maxNum = Math.max(x, y, z);
console.log(`max number is = [${maxNum}]`);

