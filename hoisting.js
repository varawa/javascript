//Hoisting
//Variable "declaration" are "hoisted" toward "top" of their scope .

ex = 4 ;

console.log(ex)

var ex ;

//It works for var and normal function declarations .

//Hoisting is not possible for anonymous functions , let , const etc .