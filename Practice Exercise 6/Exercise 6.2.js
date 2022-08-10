let desc = ['Creative', 'Outgoing' , 'Intelligent', 'Confident'];
let output;
function describe() {
    let userName = prompt('Enter your name');
    output = `${userName} is very ${desc[Math.floor(Math.random() * desc.length)]}`;
    return output;
}
console.log(describe());