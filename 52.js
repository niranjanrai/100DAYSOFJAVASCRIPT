// Rest parameter

// function myFunc(a, b, c) {
//   console.log(`a value is ${a}`);
//   console.log(`b value is ${b}`);
//   console.log(`c value is ${c}`);
// }

// myFunc(7, 8, 9);

// what happened when i not put more argument than the parameter at that time rest parameter are used

// myFunc(7, 8, 9, 10, 11, 12, 13, 14); // 7,8,9

// ...c --> is a rest parameter

// function myFunc(a, b, ...c) {
//   console.log(`a value is ${a}`);
//   console.log(`b value is ${b}`);
//   //   console.log(`c value is ${c}`);
//   console.log(c); // gives array
// }

// myFunc(7, 8, 9, 10, 11, 12, 13, 14); // a->7,b->8,c-->9,10, 11, 12, 13, 14)

// c is array [10,11,12,13,14]

function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}
console.log(addAll(1, 2, 3, 4, 5, 6));
