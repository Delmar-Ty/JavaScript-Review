let isFriend = prompt('Enter your name (First and Last)');
let ind;

switch (isFriend) {
    case 'John':
        ind = true;
        break;
    case 'Joe':
        ind = true;
        break;
    case 'James':
        ind = true;
        break;
    default:
        ind = false;
}

if (ind) {
    alert(`${isFriend} is a friend`);
} else {
    alert(`${isFriend} I don't know that well`);
}