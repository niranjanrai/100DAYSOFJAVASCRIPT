// Set Method
// It is Itrable
// Store data
// set also have its own method
// Order is not guaranteed like array
// Only store unique item [not allowed duplicated]

// Contrcuctor

const number = new Set(); // Constructor

// ...............

// store data
// const num = new Set([1, 2, 3, 4]);
const num = new Set("Niranjan");
// console.log(num);

let key1 = null;
let value1 = "10";
const obj = {
  firstName: "Manoj",
  profession: "Manager",
  [key1]: value1,
};

// console.log(obj);

for (let num in obj) {
  console.log(num);
}
