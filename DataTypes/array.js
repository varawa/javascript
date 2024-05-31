//ARRAYS

let dishes = ["one" , "two" , "three" , "four"] ;

//Access
console.log(dishes[1]) ;
console.log(dishes[4]) ;


//In js, unlike other programming languages when we access a location which doesn't exist in array we get undefined instead of an error .

dishes[2] = "new" ;

console.log(dishes) ;

//JOIN METHOD

console.log(dishes.join(' ')) ;
console.log(dishes.indexOf("one")) ;    //CASE SENSITIVE

let newdish = ["ek" , "do" , "teen"] ;

console.log(dishes.concat(newdish)) ;

//LENGTH METHOD

console.log(dishes.length) ;
console.log(newdish.length) ;

//PUSH METHOD

console.log(dishes.push("ten")) ;   //Returns length of new array .

//POP METHOD

console.log(dishes.pop()) ;         //Returns the popped element .