const isAvailable = (car) => {
    return car.available ?
        "This car is available" :
        "This car is not available";
}

const car = {
    brand: "Toyota",
    model: "Camry",
    available: true
};

const availabilityMessage = isAvailable(car);
console.log(availabilityMessage);