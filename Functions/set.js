//setTimeOut and setInterval

//setTimeout -> Run function "once" after "interval" of time .
//setInterval -> Run function repeatedly , starting after the interval 
//of time , then repeating ....

//setTimeOut

//setTimeOut

//setTimeOut(func|code , delay , arg1 , arg2 , ....)

function greet(){
    console.log("Welcome") ;
}

setTimeout(greet,5000)  //5000ms = 5sec .


setTimeout(function greeting(name){
    console.log("here ", name) ;
},5000,"now")           //5000ms = 5sec .

//setInterval

//setInterval(func|code , delay , arg1 , arg2 , ....)

//setInterval(greet , 5000) ;

