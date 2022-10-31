// Spread Operator

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
  orderDelevery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Ordered recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time}  `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delecious pasta with ${ing1}, ${ing2}, and  ${ing3}`
    );
  },
};

const arr = [5, 6, 7];
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

const newArr = [1, 2, 3, 4, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restuarant.mainMenu, "Gneucci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restuarant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const joinedArr = [...restuarant.mainMenu, ...newMenu];
const menu = [...restuarant.mainMenu, ...restuarant.starterMenu];
console.log(menu);
console.log(joinedArr);

// Iterables: arrays, strings, sets, maps NOT object

const firstName = "Niranjan";
const letters = [...firstName, "", "R"];
console.log(letters);

const ingredients = [
  //   prompt("Let's make pasta! ingredients-1"),
  //   prompt(" ingredients-2"),
  //   prompt("ingredients-3"),
];

console.log(ingredients);

restuarant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restuarant.orderPasta(...ingredients);

// Object

const newRestuarant = {
  ...restuarant,
  founder: "Niranjan",
  foundingYear: 2010,
};
console.log(newRestuarant);

// make a object copy
const copyObj = { ...restuarant };
console.log(copyObj);
copyObj.name = "papilon";
console.log(copyObj.name);
console.log(restuarant.name);
