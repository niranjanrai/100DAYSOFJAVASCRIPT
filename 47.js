// hoisting

// hello();

// function declaration
// function hello() {
//   console.log("hello world");
// }

// function expression
// const hello = function () {
//   console.log("hello world");
// };

// Arrow function
const hello = () => {
  console.log("hello world");
};

hello();

//
console.log(firstName); // undefined
var firstName = "Nir"; // undefined in case of var
console.log(firstName); // 'Nir'

// but give error in let and const
// console.log(lastName); // cannot access before initialization
let lastName = "Rai"; // uncaught reference error
// console.log(lastName);
// same in case of const
