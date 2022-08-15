class Employee {
    constructor (firstName, lastName, yearsWorked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWorked = yearsWorked;
    }
}

let employee1 = new Employee('John', 'Doe', 5);
let employee2 = new Employee('Joe', 'Smith', 10);
let employees = [];
employees.push(employee1, employee2);

Employee.prototype.info = function () {
    return `
    First Name: ${this.firstName}
    Last Name: ${this.lastName}
    Years Worked: ${this.yearsWorked}`;
};

employees.forEach(function (el) {
    console.log(el.info());
});