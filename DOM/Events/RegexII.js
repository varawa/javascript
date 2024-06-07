//Regular Expression Part II

//Basic form validation using regex .

//Implementation

//Username can only consist of A-Z or a-z .
//Length of username between 6 to 12 .

let form = document.querySelector('.SignUp') ;
let email = document.querySelector('#email') ;
let password = document.querySelector('#password') ;

let userPattern = /^[A-Za-z]{6,12}$/

console.log(form) ;

form.addEventListener('submit' , (e)=>{
    e.preventDefault() ;
    let username = form.userName.value ;

    //test method gives boolean value .

    let check = username.test(userPattern) ;

    if(check == true){
        console.log("Valid UserName!")
    }
    else{
        console.log("Try Again!") ;
    }
})