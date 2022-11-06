console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Niranjan";
console.log(firstName);

function greet() {
  console.log("hello");

  function ayushi() {
    console.log("hey i am ayushi");
  }
  ayushi();
}

greet();
