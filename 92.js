// Explore
const airline = "Air India";
console.log(airline.valueOf());
console.log(airline.toUpperCase());
console.log(airline.toLocaleLowerCase());

// fixed the capitalization

const passenger = "NirAnjAN"; // Niranjan
console.log(passenger);
const passengerLower = passenger.toLocaleLowerCase();
const correctPassenger =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(correctPassenger);

// Comparing email
const email = "hello@niranjan.com";
const loginEmail = "   Hello@niranjan.Com \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalized = loginEmail.toLowerCase().trim();
console.log(normalized, normalized === email);

// replacing

const priceIN = "20,000 ₹";
const priceUS = priceIN.replace("₹", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23! ";

console.log(announcement);
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

// Regex

console.log(announcement.replace(/door/g, "gate"), "----> Regex");

// return boolean
const plane = "Air320neo";
console.log(plane.includes("Air320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("320"));
if (plane.startsWith("Air") && plane.endsWith("neo")) {
  console.log("this is correct plane");
}

// practice
const checkBaggae = function (items) {
  // const baggage = items.toLowerCase();
  const baggage = items;
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed at board");
  } else {
    console.log("Welcome on Board");
  }
};

checkBaggae("i have a laptop, some foods and a pocket Knife ");
checkBaggae("Snacks and Camera ");
checkBaggae("Got some snacks and gun for bored");

console.log("----------> Classes <-----------");

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

console.log(Rectangle.name);
const here = new Rectangle(10, 10);
console.log(here);

// split and Join method string

console.log("a+very+nice+string".split("+"));
console.log("Niranjan Rai".split(" "));

const [firstName, lastName] = "Niranjan Rai".split(" ");
console.log(firstName, lastName); // magic

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalized = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  // console.log(names);
  for (let n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    console.log(namesUpper.join(" "), "----> ans");
  }
};

capitalized("Manoj and shravan");
capitalized("Niranjan Rai");
capitalized("aayushi");
capitalized("shubham");
capitalized("great work");

// Padding
const message = " Go to gate 23!";
console.log(message.padStart(2500, "^ "), message.padEnd(2500, "* "));

// Real world example

const maskedCredit = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(20, "*");
  return last.padStart(str.length, "*");
};

console.log(maskedCredit(2554818));
console.log(maskedCredit(7600944655));
console.log(maskedCredit(7016644209)); // Number
console.log(maskedCredit(15456423132454356));
console.log(maskedCredit("21585152124663126565"));

// .........Rectangle............Rectangle.prototype...Rectangle.........Rectangle.........Rectangle......Rectangle..............

// Repeat
const message2 = "Bad weather...., All Departures cancelled / Delayed.....";
// console.log(message2.repeat(51));
// console.log(message3.repeat());

//
const planeInLine = function (n) {
  console.log(`There are ${n} planes are waiting ${"✈️".repeat(n)}`);
};

planeInLine(1);
planeInLine(6);
planeInLine(15);
