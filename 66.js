// const user1 = {
//   firstName: "Ayushi",
//   lastName: "rai",
//   email: "ayushi@gmail.com",
//   age: 2,
//   address: "address",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// const user2 = {
//   firstName: "Niranjan",
//   lastName: "rai",
//   email: "ayushi@gmail.com",
//   age: 8,
//   address: "address",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// console.log(user);
// console.log(user2);
// console.log(user1.about());
// console.log(user1.is18());

// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   dance: function () {
//     return "garba 💃💃💃";
//   },
// };

// function creatUser(firstName, lastName, email, age, address) {
//   //   const user = {};
//   const user = Object.create(creatUser.prototype);
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   return user;
// }
// creatUser.prototype.about = function () {
//   return `${this.firstName} is ${this.age} years old`;
// };

// creatUser.prototype.is18 = function () {
//   return this.age >= 18;
// };

// creatUser.prototype.dance = function () {
//   return "garba 💃💃💃";
// };

// //   console.log(creatUser.prototype);
// const user1 = creatUser("Niranjan", "Rai", "email.com", 10, "address");
// const user2 = creatUser("Ayushi", "Rai", "email.com", 2, "address");
// const user3 = creatUser("Niranjan", "Rai", "email.com", 10, "address");
// console.log(user1.about());
// console.log(user2.about());

// Call apply and bind method

// Call method

// function hello() {
//   console.log("hello ayushi");
// }

// hello();
// hello.call();

// apply
// // bind
// const user1 = {
//   firstName: "Niranjna",
//   age: 8,
//   about: function (hobby, favsong) {
//     console.log(this.firstName, this.age, hobby, favsong);
//   },
// };

// const user2 = {
//   firstName: "Ayuhsi",
//   age: 2,
// };

// user1.about("dance", "kuchh");
// user1.about.apply(user2, ["dance", "kabira"]);
// user1.about.apply(user1, ["dance", "kabira"]);
// user1.about.call(user1, "sing", "kuchh v");
// user1.about();
// user2.about();

// const func1 = user1.about.bind(user2, "coder", "kabira");
// func1();

// const user1 = {
//   firstName: "Niranjan",
//   age: 2,
//   about: function () {
//     console.log(this.firstName, this.age);
//   },
// };

// user1.about();

// const myFunc = user1.about.bind(user1);
// myFunc();

// Arrow function
// window

// const user1 = {
//   firstName: "Ayushi",
//   age: 2,
//   about: () => {
//     console.log(this.firstName);
//   },
// };

// user1.about();
//
// short Syntax

// const user1 = {
//   firstName: "Ayushi",
//   age: 2,
//   about() {
//     console.log(this.firstName);
//   },
// };
// user1.about();

// const user1 = {
//   firstName: "Niranjan",
//   lastName: "Rai",
//   email: "nirnajan@gmail.com",
//   age: 8,
//   address: "address",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// const user2 = {
//   firstName: "Ayuhsi",
//   lastName: "Rai",
//   email: "nirnajan@gmail.com",
//   age: 8,
//   address: "address",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// console.log(user1);
// console.log(user1.is18());

// function createUser(firstName, lastName, email, age, address) {
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = function () {
//     return `${this.firstName} is ${this.age} years old`;
//   };
//   user.is18 = function () {
//     return this.age >= 18;
//   };
//   return user;
// }

// const user1 = createUser("niranjan", "rai", "mail.com", 8, "address");
// const user2 = createUser("ayushi", "rai", "mail.com", 2, "address");
// const user3 = createUser("ayushi", "rai", "mail.com", 2, "address");
// console.log(user1);
// console.log(user2);
// console.log(user3);

// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   dance: function () {
//     return "💃💃💃💃💃";
//   },
// };

// function createUser(firstName, lastName, email, age, address) {
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = userMethods.about;
//   user.is18 = userMethods.is18;
//   user.dance = userMethods.dance;
//   return user;
// }

// const user1 = createUser("niranjan", "rai", "mail.com", 8, "address");
// const user2 = createUser("ayushi", "rai", "mail.com", 2, "address");
// const user3 = createUser("ayushi", "rai", "mail.com", 2, "address");
// // console.log(user1);
// console.log(user2.dance());
// // console.log(user3);

// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   dance: function () {
//     return "💃💃💃💃💃";
//   },
// };

// function createUser(firstName, lastName, email, age, address) {
//   const user = Object.create(userMethods);
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   return user;
// // }

// const user1 = createUser("niranjan", "rai", "mail.com", 8, "address");
// const user2 = createUser("ayushi", "rai", "mail.com", 2, "address");
// const user3 = createUser("ayushi", "rai", "mail.com", 2, "address");
// console.log(user1);
// console.log(user2);
// console.log(user2.is18());
// console.log(user2.);
// console.log(user3);

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = {
//   key3: "value3",
//   key4: "value4",
// };

// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";
// obj2.key4 = "value4";
// obj2.key1 = "value4";

// __proto__  ,  [[prototype]] ---> same-- object
// prototype ---- ye alage -- > function

// console.log(obj1);
// console.log(obj2);

// prototype

// function helloAyushi() {
//   console.log("hello");
// }

// helloAyushi.prototype.abc = "abc";
// helloAyushi.prototype.xyz = "xyz";
// helloAyushi.prototype.any = { firstName: "nir" };
// helloAyushi.prototype.about = function () {
//   console.log(hello);
// };
// // const helloAyushi = {
//   firstName: "Nir",
// };

// const helloAyushi = [1, 2, 3, 4];
// console.log(helloAyushi.prototype);

// function = function + object

// console.log(helloAyushi.name);
// helloAyushi.myValue = "my imp value";
// console.log(helloAyushi.myValue);

// console.log(helloAyushi.prototype);

// if (helloAyushi.prototype) {
//   console.log("protype is present");
// } else {
//   console.log("prototype is not present");
// }

// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   dance: function () {
//     return "💃💃💃💃💃";
//   },
// };

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); // [[prototype]] , __proto__
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

// protype

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.dance = function () {
  return "💃💃💃💃💃";
};

const user1 = createUser("niranjan", "rai", "mail.com", 8, "address");
const user2 = createUser("ayushi", "rai", "mail.com", 2, "address");
const user3 = createUser("ayushi", "rai", "mail.com", 2, "address");
console.log(user1);
console.log(user2.about());

// __proto__

const user5 = {
  key: "value1",
};

// const user6 = {
//   key: "value6",
// };

const user6 = Object.create(user5);
user6.key6 = "value6";
console.log(user6);
console.log(user6.__proto__);

// user6.__proto__ = user5;
// __proto__  , [[prototype]] ---> object.create()
