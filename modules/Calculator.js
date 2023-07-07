function add(num1, num2) {
	const sum = num1 + num2;
	return sum;
}

function subtract(num1, num2) {
	const difference = num1 - num2;
	return difference;
}

function multiply(num1, num2) {
  const product = num1 * num2;
  return product
}
function divide(num1, num2) {
  const quotient = num1 / num2;
  return quotient
}
function findAreaOfCircle(radius) {
  const area = Math.pow(radius, 2) * Math.PI;
  return area
}
function findAreaOfRectangle(side1, side2) {
  const area = side1 * side2
  return area
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  findAreaOfCircle,
  findAreaOfRectangle
}