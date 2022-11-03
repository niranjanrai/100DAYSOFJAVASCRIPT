// Set Data Structure

const orderSet = new Set([
  "Pasta",
  "pizza",
  "pizza",
  "Risotto",
  "Pasta",
  "pizza",
]);

console.log(orderSet);
console.log(orderSet.size);
// console.log(orderSet.add("Bikal"));
console.log(orderSet.has("bread"));
// console.log(orderSet.has("Garlic-bread"));
console.log(orderSet.add("Garlic-bread"));
console.log(orderSet.add("Garlic-bread"));
console.log(orderSet);
console.log(orderSet.delete("Garlic-bread"));
console.log(orderSet);
let x = 0;
for (const order of orderSet) {
  x++;
  console.log(`${x}: ${order}`);
}

// Use case

const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];

const unique = [...new Set(staff)]; // array from set
console.log(unique);
