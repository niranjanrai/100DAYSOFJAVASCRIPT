// Lexical Scope
// const myVar = "inside global scope";

function myApp() {
  const myVar = "Value1";

  function myFunc() {
    // const myVar = "Value50"; // if commented then print value1

    const myFunc2 = () => {
      console.log("inside myFunc2,", myVar);
    };
    // console.log("Inside from myFunc", myVar);
    myFunc2();
  }
  //   const myFunc2 = function () {};
  //   const myFunc3 = () => {};
  //
  console.log(myVar);
  myFunc();
}
myApp();
