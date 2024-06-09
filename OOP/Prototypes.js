
//Prototypes

//Each object created by "constructor" function have an access to all
//"methods" present inside that "constructor" prototype .

let car = function(color , model){

    //instance properties .
    this.color = color ;
    this.model = model ;

}

car.prototype.startEngine = function(){
    console.log("This is start engine method .") ;
}

car.prototype.company = "Honda" ;

console.log(car.prototype) ;

let newcar = new car("Black" , 2002) ;

console.log(newcar) ;
newcar.startEngine() ;

console.log(newcar.__proto__.isPrototypeOf(car)) ;

//It is same as 
console.log(car.prototype.isPrototypeOf(newcar)) ;

//car.prototype is prototype of all objects created through 
//the car constructor .

let arr = [2,3,4,5,6,7] ;   //[] is same as new array .

console.log(arr.__proto__ , Array.prototype) ;
console.log(arr.__proto__.__proto__) ;  //Chaining of prototype.
console.log(arr) ;