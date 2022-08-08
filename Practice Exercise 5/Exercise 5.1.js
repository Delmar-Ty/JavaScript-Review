let randNum = Math.floor(Math.random() * 5) + 1;
let correct = false;
let message;
while (!correct) {
    let userGuess = Math.round(Number(prompt('Please enter a whole number between 1 and 5')));
    let check = randNum - userGuess;
    if (check < 0 ) {
        message = 'Guess lower';
    } else if (check > 0) {
        message = 'Guess higher';
    } else {
        correct = true;
        message = 'You guessed correctly';
        break;
    }
    alert(message);
}
alert(message);
location.reload();