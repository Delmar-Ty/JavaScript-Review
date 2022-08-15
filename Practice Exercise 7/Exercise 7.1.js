class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let friend = new Person('John', 'Doe');
let friend2 = new Person('Joe', 'Smith');
console.log(`Hello ${friend.firstName} and ${friend2.firstName}`);