// Closure
"use strict";
// Example --> 1

let g;

const f = function () {
  const a = 23;
  g = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 666;
  g = function () {
    console.log(b * 2);
  };
};

f();
g();
console.dir(g); // g --> 23
// Re-assigning g function
h();
g();
console.dir(g); // g --> 666
// console.dir(f);

// Example --> 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(` We are now boarding all ${n} passengers `);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup = 2000;
boardPassenger(180, 3);

// Challenges

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   document.body.addEventListener("click", function () {
//     header.style.color = "blue";
//   });
//   console.dir(header);
// })();
