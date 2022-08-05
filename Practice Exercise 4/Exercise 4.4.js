let randNum = Math.random() * 5;
randNum = Math.round(randNum);
let question = prompt('Ask me any question.');
let answer; 

switch(randNum) {
    case 1:
        answer = 'Yes';
        break;
    case 2:
        answer = 'No';
        break;
    case 3:
        answer = 'Do it';
        break;
    case 4:
        answer = 'No one asked';
        break;
    case 5:
        answer = 'Idk';
        break;
    default:
        answer = 'Sorry I did not get that';
}

alert(`Your question: ${question}... ${answer}`);