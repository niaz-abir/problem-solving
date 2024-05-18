function getSquared(number) {
  if (typeof number !== "number") {
    return console.log("Please provide a valid number.");
  }

  return number * number;
}

function getDoubled(number) {
  if (typeof number !== "number") {
    return console.log("Please provide a valid number.");
  }

  return number + number;
}

function addFive(number) {
  if (typeof number !== "number") {
    return console.log("Please provide a valid number.");
  }

  return number + 5;
}

function getSum(number) {
  if (typeof number !== "number") {
    return console.log("Please provide a valid number.");
  }

  return addFive(getDoubled(getSquared(number)));
}

console.log(getSum(6));
