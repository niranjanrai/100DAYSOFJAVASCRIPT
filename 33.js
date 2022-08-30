// for of loop in array
const fruits = ["apple", "mango", "grapes", "banana"];
const fruits2 = [];
for (let fruit of fruits) {
  //   console.log(fruit);
  //   console.log(fruit.toUpperCase());
  fruits2.push(fruit.toUpperCase());
}

console.log(fruits2);
