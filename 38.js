//  How to iterate object

const person1 = {
  name: "Manoj",
  age: 22,
  hobbies: ["sleeping", "coding", "listening music"],
};

// There are two ways of iterations
// 1 --> for in loop
// 2 --> object.keys

// for in loop

for (let key in person1) {
  //   console.log(key); // for key
  //   console.log(person1[key]); // for value
  //   console.log(`${key} : ${person1[key]} `); // for both
  //   console.log(key, ":", person1[key]); // more
}

// Object.keys

// console.log(typeof Object.keys(person1));
// console.log(Array.isArray(Object.keys(person1))); // for checking it is array or not

for (const key of Object.keys(person1)) {
  //   console.log(key); // for key
  //   console.log(person1[key]); // for value
  //   console.log(` ${key} : ${person1[key]} `); // for both
  console.log(key, ":", person1[key]); // for both
}
