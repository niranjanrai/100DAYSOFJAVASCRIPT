// Nested if else
// winning number = 29;
// 29 = your guess is right;
// 39 = your guess is too high;
// 19 = your guess is too low ;

let winningNumber = 29;
let userguess = +prompt("Enter a number") // + is added to a propt because propt display value in string and we want number

console.log(userguess);

if (userguess === winningNumber) {
    console.log("Your guess is right");
} else {
    if (userguess > winningNumber) {
        console.log("Your guess is too high")
    } else {
        console.log("too low");
    }
}