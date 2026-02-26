//  String data type
// A string is a series/sequence of character that are enclosed inside of quotation marks
const name = "Cedric Kipngeno"
console.log("The name is: ", name)

// floating point: This is a number with decimal
let quantity = 35.5
console.log("The quantity of sugar bought is: ",quantity)

// Boolean : It returns true or false
let isAdult = true
let isRegistered = false
console.log("Is Cedric an Adult? ", isAdult)
console.log("Is he registered as a voter? ", isRegistered)

console.log(typeof(isAdult))

// undefined : This is a data type that has been declared but there is no value that has been assigned to it.
let county;
console.log("The county is: ", county)

// null data type : It is a data type that contains null values
let username = null
console.log("What is the username?: ", username)

// Assignment research and come up with examples on Object and Array data types. Show how to access items of the object and of any array

// Creating an object
const person = {
  name: "Cedric",
  age: 17,
  city: "Nairobi",
  isStudent: false
};

// Accessing object properties
console.log(person.name);        // "Cedric"       → dot notation
console.log(person["age"]);      // 17            → bracket notation
console.log(person["city"]);     // "Nairobi"

// Adding a new property
person.job = "Data Analyst";
console.log(person.job);         // "Data Analyst"

// Updating a property
person.age = 18;
console.log(person.age);         // 18

// Deleting a property
delete person.isStudent;
console.log(person.isStudent);   // undefined

// Looping through an object
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Creating an array
const fruits = ["mango", "banana", "apple", "orange"];

// Accessing items by index
console.log(fruits[0]);          // "mango"   → first item
console.log(fruits[2]);          // "apple"
console.log(fruits[fruits.length - 1]); // "orange" → last item

// Modifying an item
fruits[1] = "pineapple";
console.log(fruits);             // ["mango", "pineapple", "apple", "orange"]

// Adding items
fruits.push("grape");            // adds to the END
fruits.unshift("pawpaw");        // adds to the BEGINNING
console.log(fruits);

// Removing items
fruits.pop();                    // removes last  → "grape"
fruits.shift();                  // removes first → "pawpaw"
console.log(fruits);

// Looping through an array
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// Array of objects (very common in real apps!)
const students = [
  { name: "Brian", grade: "A" },
  { name: "Carol", grade: "B" },
  { name: "David", grade: "A+" }
];

// Accessing nested data
console.log(students[0].name);      
console.log(students[2].grade);      

// Object with an array property
const school = {
  name: "Nairobi Academy",
  subjects: ["Math", "English", "Science"]
};

console.log(school.name);           
console.log(school.subjects[1]);    