// Comparison Operators
//  They usually evaluate to a Boolean answer
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)

// Triple equal sign - RESEARCH

// Logical Operators
// Logical Operators are usedd to evaluate two or more conditions and they also give a boolean answer
// Logical AND (&&) it evaluates to true if and only if both of the conditions/statements are true
console.log((number1 < number2) && (number2 > number1))

// Logical OR (||) it evaluates to true if one of the condition is true.
console.log((number1 > number2) || (number2 > number1))

// Logical NOT (!) it is used to negate a condition/statement
console.log(!(number1 < number2))