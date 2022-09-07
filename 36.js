// Object

// Arrays are good but not sufficient in real world data
// Object store key value pair
// Object dont have index value
// objec is a reference type

// how to declare a object
const person = {
  name: "Nir",
  age: 22,
  profession: "coder",
}; // also known as object literalls
console.log(person);

// ....................
// {} --> Object literals
//  new Object() --> object constructor
// ....................

//  how to access data
console.log(person.name);
console.log(person.age);

// Also store array in object
const person1 = {
  name: "Manoj",
  age: 22,
  hobbies: ["sleeping", "coding", "listening music"],
};

console.log(person1);

// how to key value pair in object

person1.gender = "male";
console.log(person1);

// Bracket notation
console.log(person1["name"]);
console.log(person1["age"]);
console.log(person1["hobbies"]);

// Add key value with the help of bracket notation
person1["profession"] = "Coder"; // always use string in bracket
console.log(person1);

// some facts
//  --object key are always in string
