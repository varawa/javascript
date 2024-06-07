//Array Methods

//Map method (Non Mutating)
//-------------------------

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



//Filter Mthod (Non Mutating)
//---------------------------

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



//Reduce Method (Non Mutating)
//----------------------------


//Run reducer function for each array element .
//Array.reduce(function(total , currentValue) , initialValue) .

//It returns single value .

//Sum of all elements using reduce method .

let nums = [1, 5, 8, 3, 9] ;

let sum = nums.reduce(function(total , currentValue){
    console.log(total) ;
    return total + currentValue ;
} , 0)

console.log("Sum : ",sum) ;



//Find Method
//-----------


//It returns the "first" element we are looking for .

let students =[{id: 4, name: "Alex"} , {id: 2, name: "John"} , {id: 1, name: "Ameha"}] ;

let result = students.find(student=>{
    return student.id === 1 ;
})

console.log(result) ;



//Find Index Method
//-----------------

//Execute function for each array element .
//It returns "index" of that array element which first passes test otherwose -1 .

let resultIndex = students.findIndex(student=>{
    return student.id === 1 ;
})

console.log(resultIndex) ;

