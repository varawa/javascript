//***Slice (Non mutating)

//Used to extract part of array .
//Array.slice(index , lastindex(excluded)) ;
//Return new array of extracted elements .

let num = [3, 5, 7, 9] ;

let extract = num.slice(0,3) ;
console.log("Original : ",num) ;
console.log("Extracted : ",extract) ;



//***Splice(Mutating)

//Used to add new elements to the array .
//Array.splice(index , No. Of Values To Be deleted , valueToBeAdded)
//Return deleted items in the form of array .

let arr = [5, 2, 3, 9, 11] ;
console.log("Before splice : ",arr) ; 

let new1 = arr.splice(1,1,22) ;
console.log("After splice : ",arr) ; 

console.log("Deleted elements array : ",new1) ;
//new1 returns the deleted elements array .



//***At Method 

let nums = [23, 54, 77, 85] ;

console.log(nums[0]) ;
console.log(nums.at(1)) ;

//Getting last element of array .

console.log(nums[nums.length-1]) ;
console.log(nums.slice(-1)) ;   //Gives the sliced array .
console.log(nums.at(-2)) ;      //Directly gives the last element .

// at method can also be used with strings .

let named = "ameha" ;
console.log(named.at(0)) ;
console.log(named.at(1)) ;
console.log(named.at(-1)) ;