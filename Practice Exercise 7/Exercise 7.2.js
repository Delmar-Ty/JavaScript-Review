class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person1 = new Person('John', 'Doe');
let person2 = new Person('Joe', 'Smith');
console.log(`Hello ${person1.fullName()} and ${person2.fullName()}`);