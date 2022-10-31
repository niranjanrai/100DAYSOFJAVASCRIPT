// Hosting and TDZ

// 'use strict'

function calcAge(birthYear) {
  const age = 2030 - birthYear;

  function printAge() {
    const answer = `${firstName}, You are ${age} and born in ${birthYear} `;
    // console.log(answer)

    if (birthYear >= 1990 && birthYear <= 2010) {
      var millenial = true;
      const firstName = "Ayushi";
      const string = `Oh, and you'r a Millenial, ${firstName}`;
      console.log(string);
      function add(a, b) {
        return a + b;
      }
    }

    // console.log(string)
    // console.log(millenial)
    // console.log(add(2, 4))
  }

  printAge();
  return age;
}

const firstName = "Niranjan";

// console.log(calcAge(2000))

//  Functions
// console.log(addDec(2, 5))
// console.log(addExp(2, 5))
// console.log(addArr(2, 5))

function addDec(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

var addArr = (a, b) => a + b;

// Example
// console.log(numProducts)
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products are deleted");
}

// deleteShoppingCart()
