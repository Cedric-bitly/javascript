// Exporting modules; 
// we export modules so that we can utilise them in other files in our program.
 export const calculator = (x, y) => {
    let difference = x - y

    console.log("The difference between the two number is:", difference)
 }
 export const simpleInterest = (principle, rate, time)  =>{
    let si = (principle * rate * time) / 100

    console.log("The Simpe Interest is:", si)
 }

 export const bmi = (weight, height) =>{
    let answer = weight / (height **2 )

    console.log("TheBMI of the person is:", answer)
 }