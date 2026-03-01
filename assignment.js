// Task 1: Print All Odd Numbers from 1 to 19
for (let i = 1; i <= 19; i += 2){
    console.log(i);
}

console.log("====================")

// Task 2: Countdown from 10 to 1
for (let i = 10; i >= 1; i--){
    console.log(i);
}

console.log("====================")

//Task 3: Find the Largest Number in an Array
const numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0];
 for (let i = 1; i < numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
 }
 console.log("largest number is:", largest)

 console.log("====================")

//  Task 4: Multiplication Table of 5
for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

console.log("====================")

// Research on arrow functions with parameters and annonymous functions in javascript
// Regular vs Arrow Function
// Regular
// function add(a, b){return a + b;}
// Arrow
// const add = (a, b) => a + b;

// Arrow Functions with Parameters
// single parameters; arrow function;
const square = x => x * x;
console.log(square(5));

 console.log("====================")

// multiple parameters; regular function;
function multiply(a, b){ return a * b; }
console.log(multiply(3, 4));