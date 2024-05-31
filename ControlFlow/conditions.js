//if , else , else if , statements

let budget = 2000 ;

if(budget > 2000){
    console.log("Greater than 2000") ;
}
else if(budget === 2000){
    console.log("Equal to 2000") ;
}
else{
    console.log("Smaller than 2000") ;
}

console.log("Out of if else statements") ;

//Nested If

let num = 23 ;

if(num > 22){
    console.log("First condition is true .") ;
    if(num == 23){
        console.log("Second condition is true .") ;
    }
}

//BREAK and CONTINUE

for(let i = 1 ; i <= 10 ; i++){
    if(i == 2){
        continue ;
    }
    console.log(i) ;
}

//BREAK : Terminates a loop .

for(let j = 1 ; j <= 10 ; j++){
    if(j == 5){
        break ;
    }
    console.log(j) ;
}

//Ternary Operators

let age = 17 ;

let result = age > 18 ? "qualify" : "disqualify" ;