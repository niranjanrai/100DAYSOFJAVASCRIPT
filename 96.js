// "use strict";

// Function return other function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const newGreet = greet("hey");
newGreet("Shravan");
newGreet("Manoj");

// Is same as
greet("hie")("Manoj"); // this is also gonna work

// Arrow function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name} `);
greetArr("hello")("Niranjan");

// Call and Apply method:
const airIndia = {
  airline: "AirIndia",
  iataCode: "AI",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a flight on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

airIndia.book("320", "Niranjan rai");
airIndia.book("600", "Manoj saroj");
console.log(airIndia);

const vistara = {
  airline: "Vistara",
  iataCode: "VT",
  booking: [],
};

const book = airIndia.book;

// Does NOT work
// book(500, "shravan");
book.call(vistara, 500, "Shravan singh");
console.log(vistara);
book.call(airIndia, 435, "Ayushi garewal");
console.log(airIndia);
