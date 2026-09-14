// object basics

const language = {
  name: "JavaScript",
  type: "programming",
  year: 1995,
  isFun: true,
};

console.log(language.name); // dot notation
console.log(language["type"]); // bracket notation

language.creator = "Brendan Eich"; // add new property
delete language.isFun; // remove property
console.log(language);

for (const property in language) {
  console.log(`${property}: ${language[property]}`);
}
