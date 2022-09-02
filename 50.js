// Block scope vs function scope

// let and const are block scope
// var is function scope

// {
//   let firstName = "Niranjan";
//   //   console.log(firstName); // Niranjan
// }

// console.log(firstName); // error , not defidned because let and const are block scope

// {
//   let firstName = "Manoj";
//     console.log(firstName); // Niranjan
// }

//  function myFunc() {
// if (true) {
//   let firstName = "shubham";
//   console.log(firstName);
// }
//   console.log(firstName);
// }

// myFunc()
function myFunc() {
  const myVar1 = "hello from myfunc";
  const myFunc2 = () => {
    const myVar1 = "50";
    const myFunc3 = () => {
      const myVar1 = "inside my func3";
      console.log("inside myFunc2", myVar1);
    };
    myFunc3();
  };
  console.log(myVar1);
  myFunc2();
}

myFunc();
