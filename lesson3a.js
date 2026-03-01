// Javascript For loop
// Loops are used to iterate through something(Repeat something a bunch of times)
// Structure of the for loop
// 1. for keyword followed by paranthesis
// 2. initialization, set the condition, increment/decrement
// 3. body of the for loop


for(let i = 0; i <= 10; i++){
    console.log("The new value of i is: ", i)
}

console.log("====================")

for(let i=0; i <= 10; i++){
    if(i == 6){
        console.log("This is number 6")
    }else{
        console.log("The new value of i is: ", i)
    }
}

// Create a for loop that is able to printout all the leap years from 2000 to 2026
 for(let year = 2000; year <= 2026; year++){
     if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
         console.log(year, "is a leap year.")
     }
 }


 
//  page  30 and 28 of the book