"use strict";

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  values.forEach(e => {
    if (e % 3 === 0) {
      threeCallback(e);
    }
    if (e % 5 === 0) {
      fiveCallback(e);
    }
  });
}

threeFive(10, 15, sayThree, sayFive);

function sayThree(e) {
  console.log(e + " is divible by 3");
}
function sayFive(e) {
  console.log(e + " is divible by 5");
}
