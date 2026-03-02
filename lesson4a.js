//  Functions with parameters.
// Parameters are values that get passed as arguments when we invoke a function.
// They help us create functions that can be reusable through out a program.

function greeting(name){
    console.log("Hello", name, "How are you doing?")
}

greeting("Cedric")

console.log("====================")
//  below is a function with parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the two numbers is:", sum)
}

addition(55, 45)

console.log("====================")

// Calculate the area of a triangle whose base is 20 and height is 12cm. by use of a function that accepts parameters. 
function calaculateTriangleArea(base, height){
    return (base * height) / 2;
}

const area = calaculateTriangleArea(20, 12);
console.log(`The Area of the triangle is: ${area} cm\u00B2`)

console.log("====================")

// Find the simple interest given the principle as 50000 rate as 5% and time as 8years
function simpleInterest(principal, rate, time){
    return (principal * rate * time) / 100;
}

const si = simpleInterest(50000, 5, 8);

console.log(`Simple Interest: Ksh ${si}`);