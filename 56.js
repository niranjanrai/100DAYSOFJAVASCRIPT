"use strict";
//  set
// let data = new Set(["Nir", "Chandan", "Manoj", "Shravan", "Deepak"]);
// console.log(data);
// data.add("Juber");
// console.log(data);
// ......

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2030 - birthYear);
//   console.log(this);
// };

// calcAge(1998);

//  Arrow function

// console.log(this);
// const calcAgeArrow = (birthYear) => {
//   console.log(2030 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1988);

// const nir = {
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// nir.calcAge();

//  closure

// console.log("nir");
// function can return function
// function outerFunction() {
//   function innerFunction() {
//     console.log("hello world");
//   }
//   return innerFunction;
// }
// const ans = outerFunction();
// console.log(ans);
//  ans();

// function printFullName(firstName, lastName) {
//   function printName() {
//     console.log(firstName, lastName);
//   }
//   return printName;
// }
// const ans = printFullName("Nir", "Rai");
// // console.log(ans);
// ans();

// ...........................................................................

// important array method
// for each method

const numbers = [1, 2, 3, 4, 5, 6];
function addTwo(num, index) {
  console.log(`index is ${index} and number is ${num * 2}`);
  // console.log(`${num}*2 = ${num * 2}`);
}

// addTwo(numbers[0], 0);
// addTwo(numbers[1], 1);

// for (let i = 0; i < numbers.length; i++) {
// console.log(i);
// addTwo(numbers[i], i);
// console.log();
// }

// for each
// numbers.forEach(addTwo);

const user = [
  { firstName: "Nir", gender: "male" },
  { firstName: "Manoj", gender: "male" },
  { firstName: "Shravan", gender: "male" },
  { firstName: "Shubham", gender: "male" },
];

user.forEach(function (user, index) {
  console.log(user);
});
