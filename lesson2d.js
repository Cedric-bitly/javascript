// If ... else if ... else statement
// Used to evaluate multiple conditions

let age = 14

if(age < 15){
    console.log("You are too young to watch this episode.")
}
else if (age >= 15 && age <= 18){
    console.log("You can watch this episode but with parental guidannce...")
}
else{
    console.log("This episode is suitable for you")
}

// Assignment
let distance =1110

let amountToPay;
if (distance >= 0 && distance <= 100){
    amountToPay = 5;
}
else if(distance >= 101 && distance <=500){
    amountToPay = 10;
}
else if(distance >= 501 && distance <=1000){
    amountToPay = 20;
}
else{
    amountToPay = 40;
}
console.log(`Amount to Pay: ${amountToPay} USD`)