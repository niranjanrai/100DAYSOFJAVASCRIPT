// Scoping in javascript
const myName = "Niranjan";
function first() {
  const age = 30;

  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }
  function second() {
    const job = "coder";

    console.log(`${myName} is a ${age} old ${job}`);
  }
  second();
}

first();
