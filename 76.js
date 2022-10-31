// Destructuring Object

"use strict";

const restuarant = {
  name: "paramount",
  location: "surat, gujarat",
  categories: ["Italian", "pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruchetta", "Garlic-bread", "Caprese salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hour
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelevery: function (obj) {
    console.log(obj);
  },
};
restuarant.orderDelevery({
  time: "22:10",
  address: "vapi, surat",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restuarant;
console.log(name, openingHours, categories);
// console.log(openingHours.fri.close);

const {
  name: restuarantName,
  openingHours: hours,
  categories: tags,
} = restuarant;
console.log(restuarantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restuarant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 2, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested object
const {
  fri: { open, close },
} = openingHours;

console.log(open, close);
