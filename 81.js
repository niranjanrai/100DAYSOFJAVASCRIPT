// Logical Assigment Operator

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

const rest1 = {
  name: "Kailash parbat",
  numGuests: 0,
};

const rest2 = {
  name: "Atithi",
  owner: "Manoj",
};

// OR Assignment Operator

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Nulish Assignmenet operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND Operator

// rest1.owner = rest1.owner && "<ANONYSMOUS>";
// rest2.owner = rest2.owner && "<ANONYSMOUS>";

rest1.owner &&= "<ANONYSMOUS>";
rest2.owner &&= "<ANONYSMOUS>";

console.log(rest1);
console.log(rest2);
