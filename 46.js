// Arrow function

const singHappyBirthday = function () {
  console.log("happy Birthday....");
};
singHappyBirthday();

//
const twoPlusFour = function () {
  console.log(2 + 4);
};
twoPlusFour();

//
const twoPlusThree = function () {
  console.log(2 + 3);
};
twoPlusThree();
//

const newSum = function () {
  return 2 + 4;
};
console.log(newSum());

const sumTwoNum = function (num1, num2) {
  return num1 + num2;
};

const resul = sumTwoNum(6, 10);
console.log(resul);

//
const sumThreeNumber = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

console.log(sumThreeNumber(1, 2, 3));

//
// const isEven = function (number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
const isEven = function (number) {
  return number % 2 === 0;
};
console.log(isEven(3));

// input:string
// output:firstChar
const firstChar = function (anyString) {
  return anyString[0];
};
console.log(firstChar("Niranjan"));

//
// input:array target
// output:index of target present in array

const findTarget = function (array, target) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

// const myArray = [1, 2, 3, 4, 5];
const myArray = ["Nir", "Manoj", "shravan"];
const findreslt = findTarget(myArray, "Nir");
console.log(findreslt);
