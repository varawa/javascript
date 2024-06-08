//Chain Of Methods

let num = [1,2,3,4,5,6] ;

let result = num.slice(0,3).splice(2,1,7) ;

//num isnt mutated because first, slice made a copy and then splice is called .

console.log(num) ;
console.log(result) ;

let result1 = num.slice(0,3).splice(2,1,7).push(8) ;

console.log(result1) ;

//Push returns length of array which is not an array itself so we cant use further methods on array after we push something .