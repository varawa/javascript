//Form Events (Submit form)

let form = document.querySelector('.SignUp') ;
let email = document.querySelector('#email') ;
let password = document.querySelector('#password') ;

console.log(form) ;

form.addEventListener('submit' , (e)=>{
    e.preventDefault() ;
    //console.log(email.value , password.value) ;  OR
    console.log(form.userEmail.value , form.userPassword.value) ;
})