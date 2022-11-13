// console.log(this);
// console.log(window);
// console.log(firstName);
var firstName = "Niranjan";
// console.log(firstName);

function greet() {
  console.log("hello");

  function ayushi() {
    console.log("hey i am ayushi");
  }
  ayushi();
}

// greet();

// Primitive vs reference as a Value

const flight = "C420";
const niranjan = {
  name: "Niranjan Rai",
  passport: 4571241164,
};

const checkIn = function (flightNumb, passenger) {
  flightNumb = "B220";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 4571241164) {
    alert("You are checked In");
  } else {
    alert("invalid passport details");
  }
};

checkIn(flight, niranjan);
console.log(flight);
console.log(niranjan);
