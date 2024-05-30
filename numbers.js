//NUMBERS

let score = 50 ;
console.log(score , typeof score)

//Mathematical Operators 

//let result = score/2 ;    quotient
//let result = score%2 ;    remainder

//1.  PRECEDANCE
//2.  () Bracket
//3.  ** Power
//4.  * / % (from left to right we evaluate)
//5.  + - (from left to write we evaluate)

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

console.log(stringType , typeof stringType) ;

//NUMBER METHOD

let numberType = Number(stringType) ;
console.log(numberType , typeof numberType) ;

//STRING METHOD

let stringT = String(numberType) ; 
console.log(stringT) ;

//NOTE : In number method , input string must have numeric values .

//BOOLEAN METHOD

let Age = 33 ;
let bool = Boolean(Age) ;
console.log(bool) ;

//Only empty string is False, all other are True .(Spaces are true too) .
