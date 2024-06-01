//Introduction to objects in JavaScript .

let car = {
    color:"black",
    model:"2022",
    company:"Honda",
}  

console.log(car) ;

//Accessing the javascript object properties .

console.log(car["company"]) ;
console.log(car.company) ;

let propertyName = "color" ;

console.log(car[propertyName]) ;
//console.log(car.propertyName) ;   //  won't work .

car.color = "brown" ;
console.log(car[propertyName]) ;


//DELETE

let obj = {
    prop1 : "val1" ,
    prop2 : "val2" ,
}

let ret = delete obj.prop1 ;

console.log(obj) ;              //Returns true .
console.log(ret) ;