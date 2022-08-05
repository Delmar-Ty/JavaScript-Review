let height = prompt('Enter your height in inches');
let weight = prompt('Enter your weight in pounds');
height *= 0.0254;
weight *= 0.453592;
let bmi = weight / (height ** 2);
alert(`Your BMI is ${bmi.toFixed(1)}`);

/*
    BMI is equal to weight (in kilograms) divided by height (in meters) squared
*/