// Fill method
// value start end
// Object Oriented Programming in Javascript
// what is method
// function inside object is method.

// const person = {
//   firstName: 'Niranjan',
//   // firstName: 'Manoj',
//   age: 8,
//   about: function() {
//     // console.log(`person name is ${this.firstName} and age is ${this.age}`)
//     console.log(this) // person object
//   }
// }
// person.about()

// second example

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person = {
  firstName: "Niranjan",
  age: 8,
  about: personInfo,
};
const person2 = {
  firstName: "Manoj",
  age: 7,
  about: personInfo,
};
const person3 = {
  firstName: "Shravan",
  age: 2,
  about: personInfo,
};

// console.log(personInfo)
// person.about()
// person2.about()
// person3.about()

// call apply and bind
function hello() {
  console.log("Hello world");
}
hello.call(); // call method

// Example
function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}

// const user1 = {
//   firstName: "Niranjan",
//   age: 8,
// about: function(hobby, favMusician) {
//   console.log(this.firstName, this.age, hobby, favMusician)
// }
// };

// const user2 = {
//   firstName: "Manoj",
//   age: 6,
// };

// about.call(user2, "coding", "Mohit-Chauhan"); // call method
// user1.about.call(user1) // call method

// apply
// about.apply(user1, ["song-listening", "Arijit Singh"]);

// difference between call and apply is []

// bind
// bind return a function
// const func1 = about.bind(user2, "guitar", "arijit singh");

func1();

const user4 = {
  firstName: "Shravan",
  age: 4,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// user4.about()

const newUser = user4.about.bind(user4);
newUser();

// Arrow function

const user5 = {
  firstName: "Sunil",
  age: 40,
  about: () => {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};

user5.about();

// const finalUser = user5.about.bind(user5)
// finalUser()
// different behaviour
const userMethod = {
  about: function () {
    return `${this.firstName} is ${this.age} years old `;
  },
  is18: function () {
    return this.age >= 18;
  },
};

// --> function that  create object
// --> add key value pair
// --> return that object

function createUser(firstName, lastName, age, email, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.email = email;
  user.address = address;
  user.about = userMethod.about;
  user.is18 = userMethod.is18;

  return user;
}

const user1 = createUser(
  "Niranjan",
  "Rai",
  18,
  "rainiranjan1998@gmail.com",
  "city"
);
const user2 = createUser(
  "Manoj",
  "Saroj",
  10,
  "rainiranjan1998@gmail.com",
  "city"
);
const user3 = createUser(
  "Shravan",
  "Singh",
  118,
  "rainiranjan1998@gmail.com",
  "city"
);
console.log(user1.about(), user2.about(), user3.about());
console.log(user1.is18(), user2.is18(), user3.is18());

const userMethod = {
  about: function () {
    return `${this.firstName} is ${this.age} years old `;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "toon na na na la la ";
  },
// };

// // --> function that  create object
// // --> add key value pair
// // --> return that object

// function createUser(firstName, lastName, age, email, address) {
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.age = age;
//   user.email = email;
//   user.address = address;
//   user.about = userMethod.about;
//   user.is18 = userMethod.is18;
//   user.sing = userMethod.sing;
//   return user;
// }

const user1 = createUser{
  firstName:"Niranjan",
  lastName:"Rai",
  age:18,
  email:"rainiranjan1998@gmail.com",
  add:"city"
  };
const user2 = createUser(
  "Manoj",
  "Saroj",
  10,
  "rainiranjan1998@gmail.com",
  "city"
);
const user3 = createUser(
  "Shravan",
  "Singh",
  118,
  "rainiranjan1998@gmail.com",
  "city"
);
console.log(user1.about(), user2.about(), user3.about());
console.log(user1.is18(), user2.is18(), user3.is18());
console.log(user1.sing(), user2.sing(), user3.sing());

//

const obj1 = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = {} // there is one more to craete a object
const obj2 = Object.create(obj1);
console.log(obj2.__proto__); // it gives obj1
// obj2.key3 = 'value3';

console.log(obj2.key1);
