"use strict";

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
/* 
 In the first example the value of X is not effecting by the function because there we using
 X only as argument, if X were directly used in the function then it change x value.

 In the second value we have variable which contain object and in the function we directly 
 changing the value of object thats why the function effecting the y variable.
*/
