//Function
"use strict"
//Call and Apply method .
//We can manually set the value of "this" keyword using "call and apply" .

let mainPlane = {
    airline : "FlyIndia" ,
    code : "FI" ,
    bookings : [] ,
    book : function(flightNum , name){
        console.log(`${name} booked flight on ${this.airline} with flight number ${flightNum} .`) ;
        this.bookings.push({number : flightNum , name : name }) ;
    }
}
console.log(mainPlane) ;

mainPlane.book(553 , "Klaus") ;
mainPlane.book(554 , "Sam") ;

console.log(mainPlane) ;

let ChildPlane = {
    airline : "AiIndia" ,
    code : "CP" ,
    bookings : [] ,
}
let book = mainPlane.book ;

//Call Method

book.call(ChildPlane , 99 , "jamie") ;

console.log(ChildPlane) ;

//Apply Method

book.apply(mainPlane , [ 44 , "India" ]) ;

console.log(mainPlane) 