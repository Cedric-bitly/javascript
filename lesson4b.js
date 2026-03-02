// Anonymous function in Javascript.
// These are functions that exist without a name.

// Belo is an example of such functions:
// The below function shall take the name of the variable they are contained in.

const greet = function(){
    console.log("Hello there, hope you are having a nice day!...")
}
greet();
console.log(typeof(greet));


// Below is another anonymous function 
(function(){
    console.log("Welcome to the world of programming...")
})();