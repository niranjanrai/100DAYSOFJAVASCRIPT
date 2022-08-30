// Array in Js
// Array is reference type
// it is object of js
// array is collection of element
// ordered collection of item/elements
let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// arrays also has index and we can access any value with the help of index
// like
console.log(fruits[0]); // apple
console.log(fruits[1]); // mango
// array also store number
let num = [1, 2, 3, 4, 5, 6];
console.log(num);
// it also store mixed value like string num undefined null
// example
let mixed = [1, 0.1, "nir", true, undefined, null];
console.log(mixed);
console.log(typeof mixed);
// typeof array is object

// array is mutable
// that means we can change the value of array
console.log(fruits);
fruits[1] = "Banana"; // banana
console.log(fruits);

// how to check that is array or not
// to check there is funtion
console.log(Array.isArray(fruits)); // true
// if the value of isArray function is true that means it is array otherwise it it not.
// this method is useful when we work with object because the typeof aarays and object both are object

// example
let obj = {};
let arr = [];
console.log(typeof obj, typeof arr); // both are object
// at that time isArray function is helpful
