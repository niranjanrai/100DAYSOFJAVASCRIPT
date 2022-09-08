// Callback functions

function hello(a) {
  console.log(a);
  console.log("hello");
}

// hello([1, 2, 3]); // array
// hello({ firstName: "Nir" }); // objct
// hello("Nir"); // String
hello(myFunc()); // Function

function myFunc() {
  console.log("hello from myFunc");
}
