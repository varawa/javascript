//Keyboard event .

let form = document.querySelector('.SignUp') ;
let email = document.querySelector('#email') ;
let user = document.querySelector('#user') ;
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

//Live Feedback

user.addEventListener('keyup' , (e)=>{
    if(userPattern.test(e.target.value) == true){
        user.setAttribute('class','success') ;
    }else{
        user.setAttribute('class','error')
    }
})