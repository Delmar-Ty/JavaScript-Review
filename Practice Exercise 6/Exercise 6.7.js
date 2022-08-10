let value = 10;
function countdown1(x) {
    console.log(x);
    if (!x) {
        return;
    } else {
        countdown1(x - 1);
    }
}

function countdown2(x) {
    console.log(x);
    if (x) {
        x--;
        return countdown2(x);
    }
}

countdown1(value);
countdown2(value);