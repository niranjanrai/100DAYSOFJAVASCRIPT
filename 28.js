// primitive vs reference type
// primitive
let num1 = 10;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++;
console.log("after increment");
console.log(num1);
console.log(num2);

//  In primitive type the value of num2 is not changed after increment in num1

// Reference type
// let take a sa,e examplle in reference type
// array
let str1 = [1, 2];
let str2 = str1;
console.log(str1);
console.log(str2);
console.log("After increment");
str1.push(3); // add value in str1
console.log(str1);
console.log(str2);

// str2 is also changed as we changed the str1 value
