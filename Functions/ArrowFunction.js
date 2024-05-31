//Arrow Function(ES6)

//Special form of function expression .

//It allows us to write function faster because :
//No need to use function keyword .
//No need to use parenthesis() in case of single parameter .
//No need to use curly {} if single line code in function .
//No need to use return statement if single line code in function .

//Function Expression

let invitation = function(name){
    console.log(`Welcome ${name} to this event .`) ;
}
invitation("j") ;

//Arrow Function

let invite = name => `Welcome ${name} to this event .` ;

console.log(invite("j")) ;

