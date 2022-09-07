// object inside array
// very important in real life

const array1 = [
  { userId: 1, firstName: "Nir", gender: "Male" },
  { userId: 2, firstName: "Manoj", gender: "Male" },
  { userId: 3, firstName: "Shravan", gender: "Male" },
];
// console.log(array1);
for (let user of array1) {
  //   console.log(user);
  console.log(user.firstName);
}
