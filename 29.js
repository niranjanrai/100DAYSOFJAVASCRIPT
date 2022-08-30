// Clone array
// concate two array
// let array1 = [1, 2];
// let array2 = [1, 2];
// console.log(array1 === array2);
// array1.push(3);
// console.log(array1);
// console.log(array2);

// how to clone Array
let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// array1.push("item3");
// array2 = array1.slice(0); // 1 trick to clone array
// let array2 = [].concat(array1); // 2 trick to clone array
// console.log(array1);
// console.log(array2);
// console.log(array1 === array2);

// new way to clone array
// use spread-operator
// let array2 = [...array1];
// console.log(array2);
// console.log(array1);
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1, ["item3", "item4"]);
// let array2 = [...array1, "item3", "item4"];
let newArray = ["item3", "item4"];
let array2 = [...array1, ...newArray];
console.log(array1);
console.log(array2);
console.log(array1 === array2);
// console.log(array1 === array2);
