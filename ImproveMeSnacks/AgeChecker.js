const prompt = require("prompt-sync")();

const checkAge = (age) => {
    if (age < 12)
        return "You are a child";
    else if(age < 18)
        return "You are a teenager.";
    else
        return "You are an adult";

};

const age = Number(prompt("Enter your age: "));
const result = checkAge(age);
console.log(result);