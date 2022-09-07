// function declaration

// function sumTwo(num1, num2) {
//   return num1 + num2;
// }
// console.log(sumTwo(5, 9));

// odd even
// input:odd
// true false
// console.log(isEven(1));

// const isEven = function (number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

//

// var is funxtion scope
//   let and const block
// {
// var firstName = "shubham";
// console.log(firstName);
// }
// console.log(firstName);

// {
// }
// function expression
// const isEven = function (number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isEven(1));
// // Arrow function
// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isEven(1));

// function inside function

// const app = () => {
//   console.log("inside app");
//   const myFunc = () => {
//     console.log("inside myFunc");
//   };
//   const addTwo = (num1, num2) => {
//     console.log(num1 + num2);
//   };
//   myFunc();
//   addTwo(2, 4);
// };

// app();

// call back function
// function myFunc(a) {
// console.log(a);
// a();
// }
// const array = [1, 2, 3];
// const obj = {
//   firstName: "Nir",
// };
const myVar = "Global scope";
function myFunc() {
  // const myVar = "value1";
  console.log(myVar);
  function myFunc1() {
    const myVar = "inside myFunk1";
    function myFunc2() {
      const myVar = "Inside ";
      console.log("value of myFnc1", myVar);
    }
    myFunc2();
  }
  myFunc1();
}
myFunc();

const myFunction = () => {};

// myFunc(myFunc2);
