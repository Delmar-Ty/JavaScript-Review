let myCar = {
    make: 'Chevy',
    model: 'Trailblazer',
    year: 2005
}
let thing = 'color';
console.log(myCar);
myCar[thing] = 'Tan';
console.log(myCar);
thing = 'forSale';
myCar[thing] = false;
console.log(myCar);
console.log(myCar.make, myCar.model, myCar.forSale);