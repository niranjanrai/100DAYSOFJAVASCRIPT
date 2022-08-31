// Function

// Function is most important in js
// functions is like our best friend who is ready for our any work to done.

// Syntax;
// function variable(parameter){
//     console.log(variable);
// }
//  after declaring function we have to call them to execute
// variable() // calling  functions

// call,invoked and run are same;

// Example
function singHappyBirthday() {
  console.log("Happy Birthday to u.....");
}
singHappyBirthday(); // call the funcions

// example
function twoPlusFour() {
  console.log(4 + 4);
}
twoPlusFour();

// more example
function sumTwoNumber(num1, num2) {
  // parameter
  return num1 + num2;
}
const returnedValue = sumTwoNumber(2, 8); // Argument
// const returnedValue = sumTwoNumber(); // When we pass nothing in Argument it will give NaN
// const returnedValue = sumTwoNumber(1); // When we pass only one  Argument it will give NaN again
// Nan reason:
console.log(returnedValue);

// console.log(undefined + undefined); // NaN
// when we pass value to the functions is called argument

// More example
// sumThreeNumber
function sumThreeNumber(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sumThreeNumber(1, 1, 55));

// Odd and even number example
//  isEven
// input number
// Output true/false

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const retur = isEven(11);
// console.log(retur);

// In short

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// Even more shorter
// function isEven(number) {
//   return number % 2 === 0;
// }

// console.log(isEven(3));

// first Character return function
// input:string
// output:firstcharacter of string

// function firstChar(anyString) {
//   return anyString[0];
// }
// console.log(firstChar("Nir"));

// example
// input: string target
// output:index of the target present in string

function findTarget(array, target) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
// const result = findTarget([1, 2, 3, 4, 5, 6, 7, 8], 2);
// const result = findTarget(["Nir", "Manoj", "Shravan", "Chandan"], "Manoj");
console.log(result);
