//Object//Array how reference are passed .

let arr = [1, 2, 3, 4, 5] ;

let getRef = arr ;

getRef[5] = 7 ;

console.log("Original Array : ",arr) ;
console.log("GetRef Array : ",getRef) ;

//pass by value .

let getValue = [...arr] ;

getRef[5] = 8 ;

console.log("Original Array : ",arr) ;
console.log("getValue Array : ",getValue) ;

