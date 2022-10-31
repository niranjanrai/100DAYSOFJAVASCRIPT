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
