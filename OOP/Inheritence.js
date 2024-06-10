//Class Inheritence

//Class declaration(Sub class)

//class declaration

//Parent class

class car{
    constructor(color , model){
        this.color = color ;
        this.model = model ;
    }
    starTEngine(){
        console.log("This is start engine method of car classes .") ;
    }
}

//Child Class

class bike extends car{
    constructor(color , model , engineCapacity){
        super(color , model) ;
        this.engineCapacity = engineCapacity ;
    }

    bikeMethod(){
        console.log("Bike method .") ;
    }
}

let newB = new bike("black" , 2003 , 3) ;
console.log(newB.__proto__.__proto__) ;



