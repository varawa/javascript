//How to store complex data structures like
//array of objects .

//Ultimately in local storage data store in string format .


let vehicles = [
    {
        company: "Honda",
        model: "2009" 
    },
    {
        company: "Toyota",
        model: "2010"
    }
]

let stringOfVehicles = JSON.stringify(vehicles) ;
console.log(stringOfVehicles) ;

localStorage.setItem('vehicles' , stringOfVehicles) ;
console.log(localStorage) ;

//Get stored item again in object form .

let storedData = localStorage.getItem("vehicles") ;

let objectFormat = JSON.parse(storedData) ;

console.log(objectFormat) ;
