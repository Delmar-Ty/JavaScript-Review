let userAge = prompt('Please enter your age.');
userAge = Number(userAge);
let message;
if (userAge >= 21) {
    message = 'Entry to venue and ability to purchase alcohol.';
} else if (userAge >= 19 && userAge < 21) {
    message = 'Entry to venu but no ability to purchase alcohol.';
} else {
    message = 'Entry denied.';
}
console.log(message);