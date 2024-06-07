//Working with arrays(Simple Methods) .

let letters = ["a" ,"b" ,"c" ,"d"] ;

//Reverse (Mutate the original array .)

letters.reverse() ;

console.log(letters) ;

//Concatenate (Non Mutating)

let num = [1,2,3,4] ;

let Concatenated = num.concat(letters) ;
console.log(Concatenated) ;
console.log(num) ;

//Join (Non Mutating)

let joined = letters.join('.') ;
console.log(joined) ;