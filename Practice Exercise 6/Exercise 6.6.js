function factorial(n) {
    console.log(n);
    if (n) {
        return n * factorial(n -1);
    } else {
        return 1;
    }
}
console.log(factorial(7));