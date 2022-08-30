// Array Destructuring
const myArray = ["value1", "value2", "value3", "value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log(myVar1);
// console.log(myVar2);

// Destructuring
// let [myVar1, myVar2] = myArray;
let [myVar1, myVar2, ...myNewArray] = myArray;

// let myNewArray = myArray.slice(2);
console.log(myVar1);
console.log(myVar2);
console.log(myNewArray);
