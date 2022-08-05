let randNum = Math.round(Math.random() * 10000);
let userNum = prompt('Enter a number');
userNum = Number(userNum);
let message;
if (isNaN(userNum)) {
    alert('Please enter a valid number');
} else {
    if (randNum > userNum) {
        message = `Your number (${userNum}) is less than ${randNum}`;
    } else if (randNum < userNum) {
        message = `Your number (${userNum} is greater than ${randNum})`
    } else {
        message = `Your number (${userNum} is equal to ${randNum})`
    }
    alert(message);
} 

