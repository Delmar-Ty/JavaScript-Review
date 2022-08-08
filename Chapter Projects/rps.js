let items = ['Rock', 'Paper', 'Scissors'];
let player = items[Math.round(Math.random() * 2)];
let comp = items[Math.round(Math.random() * 2)];
let message = `Player chose: ${player}
Computer chose: ${comp}`;
let winner;
if (items.indexOf(player) > items.indexOf(comp) || items.indexOf(player) === 0 && items.indexOf(comp) === 2) {
    winner = 'Player';
} else if (items.indexOf(comp) > items.indexOf(player) || items.indexOf(comp + 2) === items.indexOf(player)) {
    winner = 'Computer';
} else if (items.indexOf(player) === items.indexOf(comp)) {
    winner = 'it is a tie';
}
alert(`${message}
The winner is... ${winner}`);