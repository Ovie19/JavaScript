const getSalary = (employee) => {
    return employee.salary;
};

const employee = {
    name: "Dapo",
    role: "Engineer",
    salary: 50000
};

const employeeSalary = getSalary(employee);
console.log(`Employee salary is ${employeeSalary}`);