// use const for array

const pi = 3.14;
console.log(pi);
// value of const is not changed
// pi = 2.4; // give error

const fruits = ["apple"];
// fruits = ["banana"]; // u cannot assign again in const but it is possible in let
console.log(fruits);
fruits.push("mango");
console.log(fruits);
