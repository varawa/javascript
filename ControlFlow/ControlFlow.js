//Control Flow

//For Loops

for(let i = 1 ; i <= 10 ; i++){
    console.log("running ", i , " times .") ;
}

//UseCases

let num = ["ek" , "do" , "teen" , "chaar"] ;

for(let i = 0 ; i < num.length ; i++){
    console.log(num[i] , " ") ;
}

//While Loops

let j = 1 ;

while(j <= 5){
    console.log(j) ;
    j++ ;
}

j = 0;

while(j < num.length){
    console.log(num[j] , " ") ;
    j++ ;
}

//Do While loops
//Note : It runs once atleast .

j = 1 ;

do{
    console.log(j) ;
    j++ ;
}while(j < 6) ;