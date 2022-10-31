// Rest Parameter

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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//  1.  ---> Destructuring

// SPREAD, because on RIGHT side of =

const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =

const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

//
const [pizza, , risotto, ...othersFoods] = [
  ...restuarant.mainMenu,
  ...restuarant.starterMenu,
];

console.log(pizza, risotto, othersFoods);

// Objects
const { sat, ...weekdays } = restuarant.openingHours;
console.log(sat, weekdays);

//  2.  ---> Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    //   sum = sum + numbers[i];
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 5);
add(2, 5, 6, 8);
add(2, 5, 6, 8, 8, 8, 7, 9);

const x = [1, 5, 5, 87, 54];

add(...x);

restuarant.orderPizza("mushroom", "onions", "spinach", " paneer", "olives");
restuarant.orderPizza("onion");
