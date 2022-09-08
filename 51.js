//  Default Parameter

// function addTwo(a, b) {
//   return a + b;
// }

// console.log(addTwo(1, 3));

// what happened when i give only one argument
// let check

// console.log(addTwo(1)); // NAN
// it gives NAN but i dont want that nd for that default parameter are used.

// here

function addTwo(a, b = 0) {
  return a + b;
}

console.log(addTwo(1)); //1
console.log(addTwo(1, 8)); //9
