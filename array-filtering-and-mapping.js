const people = [
  { name: "Jerin", age: 20, gender: "female" },
  { name: "Emon", age: 21, gender: "male" },
  { name: "Sijun", age: 38, gender: "non-binary" },
  { name: "Sumi", age: 16, gender: "female" },
  { name: "Shakib", age: 50, gender: "male" },
];

function getFilteredNames(people) {
  if (!Array.isArray(people) || !people.length) {
    return console.log("Please send a valid argument.");
  }

  const names = people
    .filter(({ gender }) => gender !== "female")
    .map(({ name }) => name);

  console.log(names);
}

getFilteredNames(people);
