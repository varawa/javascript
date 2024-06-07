//Array Methods

//***Map method (Non Mutating)

//Create new array from original array by applying 
//Tranformation function .

let salaries = [3000, 5000, 8000, 6000] ;

let newSalaries = salaries.map(salary=>{
    let increment = salary/2 ;
    return salary + increment ;
})

console.log("Before increment : ",salaries) ;
console.log("After increment : ",newSalaries) ;

//Length of new array always equal to original array .



//***Filter Mthod (Non Mutating)

//Used to perform filtartion on array .

let gifts = ["Watch", "Ring", "Chocolates", "Teddy", "Flowers", "Ring", "Ring", "Watch"] ;

//Filter only "Watch" and "Ring" gifts .

let filtrate = gifts.filter(gift=>{
    if(gift == "Watch" || gift == "Ring"){
        return gift ;
    }
})

console.log(gifts) ;
console.log(filtrate) ;