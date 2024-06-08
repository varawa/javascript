//Date and Time

//Date Object always carry both "date" and "time" .


//Using date method .

let CurrDate = new Date(21 , 5 , 24) ;  //0 to 11 Month .

//(Year , Month , Date , hr , minute , second , ms)
//Year : (If two digits , default is 1921 when 21 is given .)
//Month : Starts from 0 , 0 is January .

console.log(CurrDate) ;


//Using timestamp (integer number represent in "ms" from 1-1-1970) .
let currentDate = new Date(0) ;

//1 Day = 24 * 60 * 60 * 1000 = 86400000 ms .

// 1 sec = 1000ms .

console.log(currentDate) ;

//To get time in "ms" ;

let current = new Date().getTime() ;
console.log(current) ;

