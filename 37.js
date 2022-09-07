// Different between dot and bracket notations
const key = "email";
const person1 = {
  name: "Manoj",
  age: 22,
  hobbies: ["sleeping", "coding", "listening music"],
};

console.log(person1.hobbies[0]);

// what happened when we want to add space in key at that time bracket notation are useful

person1["person-gender"] = "Male"; // this is not done by using dot notations
console.log(person1["person-gender"]); // to access

//  how to access other variable as a key in object
person1[key] = "niranjanrai@gmail.com"; // without string
console.log(person1);
