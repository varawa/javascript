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

//Sort (Mutating)

//By default sort method is used for strings .
//It firstly convert everything into string and then sorting is done .

let letter = ["b","a","f","d","e"] ;

console.log(letter.sort()) ;

let numbers = [8,3,-1,-9,4] ;       //Unexpected Results .


//if a-b < 0 => a < b => A,B (Keep the order same .) .

//if a-b > 0 => a > b => B,A (Switch the order) .

numbers.sort((a,b)=>{
    return a-b ;            //Ascending
})

console.log("Sorted : ",numbers) ;