//NUMBERS

let score = 50 ;
console.log(score , typeof score)

//Mathematical Operators 

//let result = score/2 ;    quotient
//let result = score%2 ;    remainder

//PRECEDANCE
//() Bracket
//** Power
//* / % (from left to right we evaluate)
//+ - (from left to write we evaluate)

let result = score *2 + (4*3) - 8 / 2 % 4

console.log(result) 

//Concatenation of numbers

let resultLine = "My total score is " + result ;
console.log(resultLine) ;

//Loose Equality (==) vs Strict Equality (===) 

let age = 22 ;
console.log(age == "22")    //true
console.log(age === "22")   //false
console.log(age != "22")   //Loose not equal
console.log(age !== "22")   //Strict not equal

//TYPE CONVERSION

let stringType = "54" ;
