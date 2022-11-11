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

console.log(" ----------> Classes <-----------");

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

console.log(Rectangle.name);

const here = new Rectangle(10, 10);
console.log(here);
