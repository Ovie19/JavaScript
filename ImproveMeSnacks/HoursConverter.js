const convertHoursToMinutes = (hours) => {
    return hours * 60;
};

let hours = 1;
let minutes = convertHoursToMinutes(hours);
console.log(`${hours} hours = ${minutes} minutes`);

hours = 5;
minutes = convertHoursToMinutes(hours);
console.log(`${hours} hours = ${minutes} minutes`);

hours = 24;
minutes = convertHoursToMinutes(hours);
console.log(`${hours} hours = ${minutes} minutes`);