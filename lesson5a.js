// Arrow functions.
// This is a function that waas introduced in the ECMAScript 6 and they give us the latest/modern way of defining functions in a compact manner.
// At times the arrow functions can be said to be anonymous functions. This is because they use the names of the variables they are contained in.


const sayHello = ()=> {
    console.log("This is an Arrow function.")
}

sayHello(); 
console.log("====================")

// Create an arrow function that is able to find the product of three numbers.
const product = (a, b, c) => a * b* c;
console.log(product(2, 7, 6));

console.log("====================")

