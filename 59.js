// console.log(myFunction); // myFunction f
// console.log(firstName); // undefined

// function myFunction() {
//   console.log("This is my function");
// }

// var firstName = "Niranjan";

// addDeclaration(3, 5); //8
// addExpression(3, 5); // ReferenceError: Cannot access 'addExpression' before initialization
// addArrow(3, 5); // ReferenceError: Cannot access 'addExpression' before initialization

// //  Function Declaration
// function addDeclaration(a, b) {
//   return a + b;
// }

// //  Function Expression
// const addExpression = function (a, b) {
//   return a + b;
// };

// // Arrow Function
// const addArrow = (a, b) => a + b;

// console.log(me); // undefined
// console.log(job); // ReferenceError: Cannot access 'addExpression' before initialization
// console.log(gender); // ReferenceError: Cannot access 'addExpression' before initialization

// var me = "Niranjan";
// let job = "Coder";
// const gender = "Male";

// TDZ Examples

// const myName = "Niranjan";
// if (myName === "Niranjan") {
//   console.log(`Niranjan is a ${job}`); // ReferenceError: Cannot access 'job' before initialization
//   const gender = "Male";
//   console.log(gender);
//   const job = "Coder";
//   console.log(x); // ReferenceError x is not defined
// }

// let firstName = "Niranjan";
// let lastName = "Rai";
// const myFunction = function () {
//   console.log("hello from myFunction");
// };
// console.log(firstName); // 'Niranjan'
// console.log(lastName); // 'Rai'
// console.log(myFunction()); // hello from myFunction

// function one() {
//   console.log("1"); // executed first
//   function two() {
//     console.log("7"); // executed second
//   }
//   two();
//   console.log("new string"); // executed third
// }
// one();

// function firstFunction() {
//   console.log("Hello from firstFunction");
// }

// function secondFunction() {
//   firstFunction();
//   console.log("The end from secondFunction");
// }

// secondFunction();
// const numbers = [1, 2, 3, 4, 5, 6, 7, 5, 7, 8, 9];
const numbers = [2, 4, 6, 8];

const result = numbers.every((number) => number % 2 === 0);
console.log(result);
console.log(numbers);
