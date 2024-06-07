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



//"some" and "every" method 
//-------------------------

//sum method returns "true" if "any" array element pass the test .

//every method returns "true" if all array element pass the test .

let nums1 = [24 , 55 , 34 , 64 , 12] ;

let flag1 = nums1.some(check=>{
    return check > 50 ;
})

console.log(flag1) ;

let flag2 = nums1.every(check=>{
    return check > 50 ; 
})

console.log(flag2) ;



//"Flat" Method
//-------------

//It creates a new array with the elements of the subarrays
//concatenated into it .

let arr = [1,2,[3],[4,5,6,[7,8]]] ;

console.log("Before flat : ",arr) ;

let resultFlat = arr.flat(2) ;      //Depth of flat function : 2.

console.log("After flat : ",resultFlat) ;



//"flatMap" method

//It is the combination of the "map()" method .
//Followed by the "flat()" method of depth l .

let cart = [{
    named:"Phone",
    qty:2,
    price:5000
},
{
    named:"Tablet",
    qty:1,
    price:50000
}]

console.log("Before flatMap : ",cart) ;

let newCart = cart.flatMap(item=>{
    if(item.named === "Phone"){
        return [item , {
            named: "Screen Protector",
            qty: 1,
            price: 0
        }];
    }else{
        return[item] ;
    }
})

console.log("After flatMap : ",newCart) ;