// Recursion
// Recusion is a concept where a function calls itself, and keeps calling itself until it is told to stop.

let counter = 0;
function printHello() {
  // console.log("hello");
  counter++;
  console.log(counter);

  if (counter > 3) {
    return;
  }
  printHello();
}

printHello();
