const Calculator = require('./modules/Calculator.js');

let sum = Calculator.add(1, 2);
let difference = Calculator.subtract(3, 2);
let product = Calculator.multiply(4, 200);
let quotient = Calculator.divide(1000, 8);
let circleArea = Calculator.findAreaOfCircle(50);
let rectangleArea = Calculator.findAreaOfRectangle(50, 200);

console.log(sum)
console.log(difference)
console.log(product)
console.log(quotient)
console.log(circleArea)
console.log(rectangleArea)