// This keyword

"use strict";

// function expression

console.log(this);
console.log("function expression --->  ");

const me = function (birthYear) {
  const age = 2050 - birthYear;
  console.log(age);
  console.log(this); // global object in normal or undefined in strict mode
};

me(2022);
// window.me(2022);
// console.log(me() === window.me()); // true

// this is a reason why the value of this in me function is window object

// Arrow function
console.log("Arrow function --->  ");

const arrowMe = (birthYear) => {
  const age = 2050 - birthYear;
  console.log(age);
  console.log(this); // global object in normal mode and also on strict mode because this in arrow function is lexically object value
};

arrowMe(2022);

// this keyword in method

const Niranjan = {
  year: 2022,
  me: function () {
    console.log(this);
    console.log(2050 - this.year);
  },
};

Niranjan.me();

//  next example
const ayushi = {
  year: 2045,
};

ayushi.me = Niranjan.me; // method borrowing

console.log(ayushi);
ayushi.me(); // here the this keyword point to the ayushi

// agrument keyword

const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpression(4, 9);
addExpression(4, 9, 1, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

console.log(addArrow(1, 9, 4, 5));
