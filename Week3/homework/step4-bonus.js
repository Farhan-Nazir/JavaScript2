"use strict";

const values = ["a", "b", "c", "d", "a", "e", "f", "c"];
//const numValues = [1, 2, 3, 4, 4, 5, 1, 2, 3, 5, 6, 7, 86, 7, 8];
// Add your function here. Try and come up with a good name for this function
function getUniqueValues(e) {
  let unique = [...new Set(e)];
  return unique;
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = getUniqueValues(values);

console.log(uniqueValues);
