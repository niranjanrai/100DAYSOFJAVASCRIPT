// Function
// Default parameter

"use strict";

const bookings = [];

const createBooking = function (
  flightNumb = 1,
  numPassenger = 1,
  price = 5999 * numPassenger
) {
  // Old way
  //   numPassenger = numPassenger || 1;
  //   price = price || 1;

  const booking = {
    flightNumb,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("A320", 200, 10000);
createBooking("A320", 200);
createBooking("A320", 5);
createBooking("A320", undefined); // undefined ----> default value
