function getSquared(number) {
  if (typeof number !== "number") {
    return console.log("Please send a valid number.");
  }

  return number * number;
}

function getDoubled(number) {
  if (typeof number !== "number") {
    return console.log("Please send a valid number.");
  }

  return number + number;
}

function addFive(number) {
  if (typeof number !== "number") {
    return console.log("Please send a valid number.");
  }

  return number + 5;
}

function getTotal(number) {
  if (typeof number !== "number") {
    return console.log("Please send a valid number.");
  }

  return addFive(getDoubled(getSquared(number)));
}

console.log(getTotal(6));
