"use strict";
//  set
// let data = new Set(["Nir", "Chandan", "Manoj", "Shravan", "Deepak"]);
// console.log(data);
// data.add("Juber");
// console.log(data);
// ......

console.log(this);
const calcAge = function (birthYear) {
  console.log(2030 - birthYear);
  console.log(this);
};

calcAge(1998);

//  Arrow function

// console.log(this);
const calcAgeArrow = (birthYear) => {
  console.log(2030 - birthYear);
  console.log(this);
};

calcAgeArrow(1988);
