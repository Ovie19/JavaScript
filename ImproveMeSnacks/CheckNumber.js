const checkNumber = (number) => {
    if (number > 0)
        console.log(`${number} is positive`);
    else if (number < 0)
        console.log(`${number} is negative`);
    else
        console.log(`${number} is zero`);
};

let number = 10;
checkNumber(number);

number = -10;
checkNumber(number);

number = 0;
checkNumber(number);