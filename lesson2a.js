// Object data types:
// An object in javascript is a data type that stores data in form of key value pairs.

let person = {
    Name : "Cedric",
    Age : 18,
    isRegistered : false
};

console.log("The details of the person is:", person)

// first method is by use of the square brackets
console.log(person["Age"])

// second method is by use of the dot notation
console.log(person.Name)

// check the data type
console.log(typeof(person))

// Array data type:
// This refers to collection of items that are on indexes
fruits = ["Grapes", "Mango", "Tangerine", "Kiwi","Lemon"]
console.log(fruits);

// to access the fruits of an array we use an index
console.log(fruits[2]);

// you can also slice items of an array
console.log(fruits.slice(2, 4));