// Reference types: array, object, function — copied by reference

let frontendLangs = ["JS", "Python"];
let webLangs = ["HTML", "CSS"];
webLangs = frontendLangs; // webLangs now points to the same array as frontendLangs

console.log(frontendLangs);
console.log(webLangs);

frontendLangs.push("C++");
console.log(frontendLangs); // ["JS", "Python", "C++"]
console.log(webLangs); // also updated — same reference in memory

// Objects behave the same way
const originalLang = { lang: "JavaScript" };
const copiedLang = originalLang;
copiedLang.lang = "TypeScript";

console.log(originalLang.lang); // TypeScript — originalLang and copiedLang point to the same object

// To avoid shared references, copy explicitly
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);

console.log(original); // [1, 2, 3] — untouched
console.log(copy); // [1, 2, 3, 4]
