
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

console.log(car.prototype) ;

let newcar = new car("Black" , 2002) ;

console.log(newcar) ;
newcar.startEngine() ;

console.log(instance.__proto__) ;