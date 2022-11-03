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
