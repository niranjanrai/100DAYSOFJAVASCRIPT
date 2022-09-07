// Array destructing

const band = {
  bandName: "led Zappline",
  famousSong: "stairway to heaven",
  year: 1966,
  another: "queen",
};

// const bandName = band.bandName;
// const famouSong = band.famousSong;
// console.log(bandName, "", famouSong);

// destructing method
// const { bandName, famousSong } = band;
// const { bandName: Var1, famousSong: Var2 } = band;
// console.log(Var1);
// console.log(Var2);

// To store rwmaining key value pair

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(famousSong);
console.log(restProps); // in object
