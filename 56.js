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
function myFunc() {
  return hello();
}
const ans = myFunc();
console.log(ans);

function hello() {
  console.log("hello from func2");
}
