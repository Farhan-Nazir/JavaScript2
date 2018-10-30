"use strict";

const numbers = [1, 2, 3, 4];
/*
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    doubleNumbers.push(numbers[i]);
  }
} */
// Add your code here
const doubleNumbers = numbers.filter(doubleNumber => {
  if (doubleNumber % 2 === 0) {
    return doubleNumber;
  }
});

console.log(doubleNumbers);
