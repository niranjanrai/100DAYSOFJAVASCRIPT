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
