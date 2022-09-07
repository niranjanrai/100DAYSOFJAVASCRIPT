// Nested destructuring
const users = [
  { userId: 1, firstName: "Nir", gender: "Male" },
  { userId: 2, firstName: "Manoj", gender: "Male" },
  { userId: 3, firstName: "Shravan", gender: "Male" },
];

const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3.firstName);
console.log(user3.gender);
