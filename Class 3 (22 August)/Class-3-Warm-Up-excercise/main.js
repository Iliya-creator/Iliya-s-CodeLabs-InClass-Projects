function isInteger(num) {
    return Number.isInteger(num);
  }

  console.log(isInteger(2)); // returns true
  console.log(isInteger(2.3)); // returns false
  console.log(isInteger(true)); // returns false
  console.log(isInteger("2")); // returns false