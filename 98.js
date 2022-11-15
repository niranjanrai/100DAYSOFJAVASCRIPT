"use strict";

// IIFE --> Immediately Invoked Function Expression

const runOnce = function () {
  console.log("Runs only once");
};
// runOnce();

(function () {
  console.log("Runs only once");
  const privateData = "Secret";
})();

// Arrow
(() => console.log("also run"))();

{
  let isPrivate = 3;
  var notPrivate = 100;
}
console.log(notPrivate);
// console.log(isPrivate);
