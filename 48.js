// function iside function

// const app = () => {
//   console.log("inside app");
// };
// app();

//
function app() {
  const myFunc = () => {
    console.log("hello from inside myFunc");
  };

  const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  const mul = (num1, num2) => {
    console.log(num1 * num2);
  };

  console.log("inside app");
  myFunc();
  console.log(addTwo(5, 9));
  mul(5, 4);
}

app();
