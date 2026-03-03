// Arrow functions with parameters

const greet = (name) =>{
    console.log("Hello " + name + " How are you doing?")
}
greet("Cedric")
console.log("====================")

// Example2
// Below is a function to find the area of a circle.
const areaofCircle = (pi, radius) =>{
    let area = pi * radius * radius;
    console.log("The area of the circle is " + area +  " cm\u00B2")}
    areaofCircle(3.142, 14);
console.log("====================")

// Come up with an arrow function that utilises three parameters
const boxVolume = (length, width, height) => {
    let volume = length * width * height;
    console.log("The volume of the box is " + volume + " cm\u00B3")}
    boxVolume(12, 6, 18);
    boxVolume(5,13, 11);
console.log("====================")