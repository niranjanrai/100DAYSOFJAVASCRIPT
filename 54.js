// Callback functions

function hello(Callback) {
  return Callback("Niranjan");
  // console.log("hello");
}

// hello([1, 2, 3]); // array
// hello({ firstName: "Nir" }); // objct
// hello("Nir"); // String
hello(myFunc); // Function

function myFunc(name) {
  console.log("hello from myFunc");
  console.log(name);
}
