const prompt = require("prompt-sync")();

const validateLogin = (username, password) => {
    if (password.length >= 8 && username.length > 2)
        console.log("Login successful");
    else
        console.log("Login unsuccessful");
};

const username = prompt("Enter username: ");
const password = prompt("Enter password: ");

validateLogin(username, password);