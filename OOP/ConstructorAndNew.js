//Object Oriented Programming

//Constructor function and the "new" operator .

//We can not use "arrow" function as constructor .

//Call "constructor" function using "new" keyword .

//1. new{object} created empty initially .
//2. "this" = {object}
//3. Object linked to prototype .
//4. Function automatically return {object} .

let car = function(color , model){
    this.color = color ;
    this.model = model ;

    //Not a good practice .
    this.login = function(){
        console.log("Login method") ;
    }
}

let newcar = new car("Black" , 2023) ;


//Checks if its a instance of car or not , returns in bool type .
console.log(newcar instanceof car) ;

console.log(newcar) ;