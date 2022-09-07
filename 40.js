//  Spread Operator in Array

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// const newArray = [...array1, ...array2]; // spread both array
// const newArray = [...array1, array2]; // second array print as it is
// const newArray = [...array1, ...array2, 7, 8, 9]; // Add other custom value as well
// console.log(newArray);
const newArray = [..."abc"]; // string are iterables amd decimal are not
// console.log(newArray);

//  Spread Operator in object
const obj1 = {
  key1: "value1",
  key2: "value2",
};

// console.log(obj1);

const obj2 = {
  key3: "value3",
  key4: "value4",
};

// const newObj = { ...obj1, ...obj2 };
const newObj = { ...obj1, ...obj2, key55: "value55" };
console.log(newObj);
