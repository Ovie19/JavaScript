const day = "saturday";

switch (day.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("It is a Weekday");
        break;
    case "saturday":
    case "sunday":
        console.log("It is a weekend");
}