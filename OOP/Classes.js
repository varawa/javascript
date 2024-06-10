//ES6 CLASSES (They still implement prototypal inheritence behind the scenes .)

class car{
    constructor(color , model){
        this.color = color ;
        this.model = model ;
    }
    starTEngine(){
        console.log("This is start engine method of car classes .") ;
    }
}

car.prototype.breakMethod = function(){
    console.log("Break method of car .") ;
}

let honda = new car("Red" , 2022) ;
console.log(honda) ;
console.log(honda.__proto__) ;          //Compatible with prototype model .
honda.starTEngine() ;
honda.breakMethod() ;

//Important

//1. Classes are not hoisted .
//2. Classes are also first class citizens(Pass as an argument or return) .
//3. Classes execute in strict mode .