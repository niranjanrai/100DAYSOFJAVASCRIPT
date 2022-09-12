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


let firstName = 'Niranjan'
let lastName = 'Rai'
const myFunction =function(){
  console.log('hello from myFunction')
}
console.log(firstName)// 'Niranjan'
console.log(lastName) // 'Rai'
console.log(myFunction()) // hello from myFunction