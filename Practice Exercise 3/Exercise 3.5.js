let people = {
    friends: []
}

let friend1 = {
    firstName: 'Erik',
    lastName: 'French',
    id: 1
}

let friend2 = {
    firstName: 'Talon',
    lastName: 'Lamb',
    id: 2
}

let friend3 = {
    firstName: 'Sam',
    lastName: 'Mun',
    id: 3
}

console.log(people);
people.friends.push(friend1, friend2, friend3);
console.log(people);