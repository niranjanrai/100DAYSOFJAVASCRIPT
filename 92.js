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
