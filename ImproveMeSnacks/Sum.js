const prompt = require("prompt-sync")();

const getSum = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
};

let numberOne = Number(prompt("Enter a number: "));
let numberTwo = Number(prompt("Enter a number: "));
let sum = getSum(numberOne, numberTwo);
console.log(`${numberOne} + ${numberTwo} = ${sum}`);