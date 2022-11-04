const books = [
  {
    id: 001,
    name: "Clean Code",
    price: 10.99,
  },
  {
    id: 002,
    name: "Introduction to Algorithms",
    price: 1199,
  },
  {
    id: 003,
    name: "Programming Pearls",
    price: 1.05,
  },
  {
    id: 004,
    name: "Program or Be Programmed",
    price: 14340,
  },
];

const price = 14340;

// Format the price above to USD using the locale, style, and currency.
let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(`The formated version of ${price} is ${USDollar.format(price)}`);

let IndianRupess = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

console.log(
  `The formated version of ${price} is ${IndianRupess.format(price)}`
);

// console.log(IndianRupess);
