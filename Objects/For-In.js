//For-in loop (Each iteration return a "key" of object) .

let car = {
    model : 2022 ,
    color : "Black",
    company : "Toyota" ,
}

console.log(car) ;

let x = 0 ;

for(let key in car){
    //console.log(key) ;
    x = x + car[key] ;
}

console.log(x) ;