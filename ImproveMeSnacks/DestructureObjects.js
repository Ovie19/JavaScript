const objectDestructurer = (object) => {

    const {name, salary} = object;

    console.log(`Name: ${name}\nSalary: ${salary}`)
};

const employee = {
    name: 'Dapo',
    role: 'Engineer',
    salary: 50000,
    department: 'Tech'
};

objectDestructurer(employee);