// Parameter Destructring

// use with object
// important for react

const person = {
  firstName: "Nir",
  gender: "Male",
};

// function printDetails(obj) {
//   console.log(obj.firstName);
//   console.log(obj.gender);
//   console.log(obj.age); // undefined if we cant put the key in object
// }

function printDetails({ firstName, gender }) {
  // destructuring parameter
  console.log(firstName); // Nir
  console.log(gender); // Male
}
printDetails(person); // call object in argument
