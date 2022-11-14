const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...restWord] = str.split(" ");
  return [firstWord.toUpperCase(), ...restWord].join(" ");
};

// Higher Order Function

const transformer = function (str, fn) {
  console.log(`Orginal string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name} named function`);
};

transformer("Javascript is the best", upperFirstWord);
transformer("Javascript is the best", oneWord);

const high5 = function () {
  console.log("👋");
};
const colorChange = function () {
  const h1 = document.querySelector("h1");
  //   console.log(h1);
  h1.style.color = "red";
};

document.body.addEventListener("click", high5);
["Niranjan", "Manoj", "Shravan"].forEach(high5);

document.body.addEventListener("mouseover", colorChange);
