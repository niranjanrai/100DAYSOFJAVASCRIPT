// Map Data Structure

// "use strict";
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // open 24 hour
    close: 24,
  },
};

const restuarant = {
  name: "paramount",
  location: "surat, gujarat",
  categories: ["Italian", "pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruchetta", "Garlic-bread", "Caprese salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelevery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Ordered recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time}  `
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delecious pasta with ${ing1}, ${ing2}, and  ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const rest = new Map();
// rest.set("firstName", "Niranjan");
// rest.set(1, "India");
// rest.set(2, "UK");
// rest.set([1, 2, 3, 4, 5, 6], "UK");
// console.log(rest.set({ firstName: "Niranjan" }, "UK"));
// console.log(rest);
// rest.set("name", "Kailash parbat");
// rest
//   .set("categories", ["Italian", "pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open :D")
//   .set(false, "we are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(false));

// const time = 10;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// console.log(rest.delete(2));
// console.log(rest);
// console.log(rest.size);
// console.log(rest.clear());
// console.log(rest);
// console.log(rest.set(document.querySelector("h1"), "heading"));

// const arr = [1, 2];
// rest.set(arr, "test");

// console.log(rest.get(arr));
// console.log(rest);

const question = new Map([
  ["question", "What is the best best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

// Convert Object to Map
console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);
console.log(question);
3;

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(` Answer${key}: ${value} `);
}
3;

const answer = Number(prompt("Your answer"));

// answer print

console.log(question.get(question.get("correct") === answer));
