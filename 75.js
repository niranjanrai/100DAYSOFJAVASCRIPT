// Destructuring Array

"use strict";

const restuarant = {
  name: "paramount",
  location: "surat, gujarat",
  categories: ["Italian", "pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruchetta", "Garlic-bread", "Caprese salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    //
  },
};

const arr = [1, 2, 5];
// before destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// after destructuring
const [x, y, z] = arr; // destructuring

console.log(a, b, c);
console.log(x, y, z);

let [main, , secondary] = restuarant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // vegetarian, Italian

// same thing with destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);

//
// console.log(restuarant.order(2, 0));
const [starter, mainCourse] = restuarant.order(2, 0);
console.log("first menu:", starter, "last menu:", mainCourse);

// nested destructuring

const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

// default values

// const [p, q, r] = [8, 9];
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);
