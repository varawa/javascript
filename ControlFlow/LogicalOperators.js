//Logical Operators

//And && , Or || , Not !

let password = "heree" ;

if(password.length > 5 && password.includes("e")){
    console.log("true") ;
}else{
    console.log("false") ;
}
if(password.length > 4 || password.includes("e")){
    console.log("true") ;
}else{
    console.log("false") ;
}

//Not Operator

let bool = false ;

if(!bool){
    console.log("its true") ;
}

//Priorities

//Not
//And , Or from left to right .

let result = true && true || false && !false

console.log(result) ;