const Calculator = require('./modules/Calculator.js');
const Statistics = require('./modules/Statistics.js');

let sum = Calculator.add(1, 2);
let difference = Calculator.subtract(3, 2);
let product = Calculator.multiply(4, 200);
let quotient = Calculator.divide(1000, 8);
let circleArea = Calculator.findAreaOfCircle(50);
let rectangleArea = Calculator.findAreaOfRectangle(50, 200);

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(circleArea);
console.log(rectangleArea);

let numbers = [62, 60, 53, 1, 11, 14, 15, 16, 17, 65, 5000];

let smallest = Statistics.smallest(numbers)
let largest = Statistics.largest(numbers)
let sumOfNumbers = Statistics.sum(numbers)
let mean = Statistics.mean(numbers)


console.log('Smallest:', smallest);
console.log('Largest', largest);
console.log('Sum:', sumOfNumbers);
console.log('Mean:', mean);
