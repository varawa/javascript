//Regular Expression

//It is a pattern of characters used to do pattern matching .
//Or we can say for "Data Validation" .

//****Implementation of password validation .

//Length atleast 8 .
//Atleast contain one uppercase letter .
//Atleast contain one lowercase letter .
//Atleast contain one digit from 0 to 9 .

let form = document.querySelector('.SignUp') ;
let email = document.querySelector('#email') ;
let password = document.querySelector('#password') ;

let PasswordPattern = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$"


console.log(form) ;

form.addEventListener('submit' , (e)=>{
    e.preventDefault() ;
    let PasswordVal = form.userPassword.value ;
    let result = PasswordVal.match(PasswordPattern)
    console.log(result) ;
    if(result){
        console.log("Strong Password!") ;
    }
    else{
        console.log("Weak Password!") ;
    }
})