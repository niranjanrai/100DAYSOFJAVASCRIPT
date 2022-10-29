const a = "Niranjan";
first();

function first() {
  //
  const b = "hello";
  second();

  function second() {
    //
    const c = "hi";
    third();
  }
}

function third() {
  //
  const d = "hey";
  console.log(d + c + b + a);
}

// first();
