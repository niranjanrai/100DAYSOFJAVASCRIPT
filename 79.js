// Short Circuiting

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

console.log("---- OR -----");
console.log(3 || "Niranjan");
console.log(true || "");
console.log(true || 0);
console.log("Niranjan" || "");
console.log(undefined || null);
console.log(undefined || null || 0 || "" || "hello" || 10);

// restuarant.numGuest = 20;
// restuarant.numGuest = 30;
const guest1 = restuarant.numGuest ? restuarant.numGuest : 10;
console.log(guest1);

// short circuit
const guest2 = restuarant.numGuest || 20;
console.log(guest2);

console.log("---- AND -----");

console.log(0 && "Niranjan");
console.log("hello" && 23 && null && "Niranjan" && undefined);

// Example

if (restuarant.orderPizza) {
  restuarant.orderPizza("Mushroom", "spinach", "cheese");
}

// example with AND short circuit

restuarant.orderPizza &&
  restuarant.orderPizza("spinach", "mushrooms", "cheese");
