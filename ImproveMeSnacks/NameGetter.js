const getName = (student) => {
    return student.name;
};

const student = {
    name: "Chinedu",
    age: 22,
    course: "Computer Science"
};

const name = getName(student);
console.log(`Student Name: ${name}`);