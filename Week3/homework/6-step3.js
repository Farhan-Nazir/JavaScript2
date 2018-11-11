"use strict";

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
arr2d.map(e => e.map(v => console.log(v)));
arr3d.map(e => e.map(v => v.map(j => console.log(j))));
