// primitive vs reference types

// primitive

let age = 10;
let oldAge = age;
age = 15;

console.log("age is ", age);
console.log("old age is still", oldAge);

// Object
const me = {
  name: "Niranjan",
  age: 50,
};

const friends = me;

friends.age = 40;

console.log("friends:", friends);
console.log("me:", me);

// example

const lastName = "Rai";
const oldLastName = "Niranjan";
console.log(oldLastName, lastName);

// Object

const nir = {
  firstName: "Niranjan",
  lastName: "Rai",
  age: 10,
};

const marriedNir = nir;
console.log(marriedNir);
marriedNir.lastName = "Ray";
console.log(nir);
console.log(marriedNir);
