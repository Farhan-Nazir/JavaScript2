"use strict";

const numbers = [1, 2, 3, 4];
/*
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    doubleNumbers.push(numbers[i]);
  }
} */
// Add your code here
const res = numbers.filter(doubleNumber => doubleNumber % 2 !== 0);
console.log(res.map(i => i * 2));
