let userSelected = prompt('Select a number between 1 and 10');
userSelected = Number(userSelected);
if (userSelected < 1 || userSelected > 10 || isNaN(userSelected)) {
    alert('Please enter a valid number');
}
let message = `You picked ${userSelected}, this is your prize: `;
let prize;

switch(userSelected) {
    case 1:
        prize = 'Dad came back with the milk';
        break;
    case 2:
        prize = 'Mommy kept the ring on';
        break;
    case 3:
        prize = 'Dad comes home sober today';
        break;
    case 4:
        prize = 'You can afford groceries this week';
        break;
    case 5:
        prize = 'A free tank of gas'
        break;
    case 6:
        prize = 'The cracker pass';
        break;
    case 7:
        prize = 'A free ticket for the titanic';
        break;
    case 8:
        prize = 'Your code works on the first try';
        break;
    case 9:
        prize = 'You get free candy from a nice bald white man in his 30s';
        break;
    case 10:
        prize = `Gordon Ramsay's taste buds`;
        break;
}

alert(message + prize);