let value = 0;
function count(x) {
    if (x <= 10) {
        console.log(x);
        return count(x + 1);
    } else {
        return;
    }
}
count(value);