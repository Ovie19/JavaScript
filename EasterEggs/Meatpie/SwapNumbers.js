const prompt = require("prompt-sync")()

let numberOne = prompt("Enter first Number: ");
let numberTwo = prompt("Enter Second Number: ");

let temp = numberOne;
numberOne = numberTwo;
numberTwo = temp;


console.log(`First number is ${numberOne}, Second number is ${numberTwo}`);
