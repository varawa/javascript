//Passing function as an argument .

let uppercase = function(str){
    return str.toUpperCase() ;
}
let lowercase = function(str){
    return str.toLowerCase() ;
}

let transform = function(str , fun){
    return fun(str) ;
}

console.log(transform("abcd" , uppercase)) ;

//Function returning another function .

let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`) ;
        return true ;
    }
}

let complimented = compliment("function1") ;

complimented("2") ;
complimented("3") ;


