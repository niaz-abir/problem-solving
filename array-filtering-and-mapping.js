const people = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 42, gender: "non-binary" },
  { name: "Diana", age: 18, gender: "female" },
  { name: "Evan", age: 60, gender: "male" },
];

function filterFemales(people) {
  if (!Array.isArray(people) || !people.length) {
    return console.log("Please provide a valid argument.");
  }

  const names = people
    .filter(({ gender }) => gender !== "female")
    .map(({ name }) => name);

  console.log(names);
}

filterFemales(people);
