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

// Call method
const vistara = {
  airline: "Vistara Airlines",
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

const indigo = {
  airline: "Indigo Airlines",
  iataCode: "IA",
  booking: [],
};

book.call(indigo, 120, "Chandan");
console.log(indigo);

// Apply method

const applyArr = [28, "john"];

const spiceJet = {
  airline: "Spicejet Airline",
  iataCode: "SJ",
  booking: [],
};

book.apply(spiceJet, [300, "Niranjan rai"]);
book.apply(spiceJet, applyArr);
book.call(spiceJet, ...applyArr); // is same as above
console.log(spiceJet);

// Bind method
// book.call(vistara, 500, "Shravan singh");
const bindSpice = book.bind(spiceJet);
const bindVistara = book.bind(vistara);
const bindIndigo = book.bind(indigo);
const bindAir = book.bind(airIndia);

bindSpice(110, "Sunil");
console.log(spiceJet);

const bindSpice25 = book.bind(spiceJet, 25);
bindSpice25("Niranjan Rai");
bindSpice25("Chandan Rai");

// with event listener
airIndia.planes = 300;

airIndia.buyplanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// airIndia.buyplanes();
document
  .querySelector(".buy")
  .addEventListener("click", airIndia.buyplanes.bind(airIndia));
console.log(airIndia);

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.18);
// addVAT = (value) => value + value * 0.18;
console.log(addVAT(1000));
console.log(addVAT(100));
console.log(addVAT(10));

//
const addTax1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT1 = addTax1(0.18);
console.log(addVAT1(100), "---> 100");
console.log(addVAT1(1000));
