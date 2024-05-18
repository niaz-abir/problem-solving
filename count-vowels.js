function getVowelsCount(text) {
  const VOWELS = ["a", "e", "i", "o", "u"];

  if (typeof text !== "string") {
    return console.log("Please provide a valid number.");
  }

  const filteredVowels = text
    .toLowerCase()
    .split("")
    .filter((char) => VOWELS.includes(char));

  return filteredVowels.length;
}

console.log(getVowelsCount("Happy New Year"));
