//ES6 CLASSES (They still implement prototypal inheritence behind the scenes .)

//Setter snd Getters

//Getters and setters allow you to define object accessors (Computed properties) .

//We can also use in class .

class car{
    constructor(color , model){
        this.color = color ;
        this.model = model ;
    }
    starTEngine(){
        console.log("This is start engine method of car classes .") ;
    }

    get _startEngine(){
        console.log("This is start engine method using getter .") ;
    }

    set changeColor(color){
        console.log(this.color = color) ;
    }
}

car.prototype.breakMethod = function(){
    console.log("Break method of car .") ;
}

let honda = new car("Red" , 2022) ;
console.log(honda) ;
console.log(honda.__proto__) ;          //Compatible with prototype model .
honda.breakMethod() ;
honda.starTEngine() ;                   //Accessing as function

honda._startEngine ;                    //Accessing as property .
honda.changeColor = "Black" ;           //Accessing as property .

//Important

//1. Classes are not hoisted .
//2. Classes are also first class citizens(Pass as an argument or return) .
//3. Classes execute in strict mode .


//Getter vs Setter
//The getter method,
//marked by the get keyword followed by the method name without parentheses, 
//allows us to retrieve the value of the _name property. For the name property, 
//a setter method is defined. 
//This setter allows modification of the value of the _name property.