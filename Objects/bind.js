//Bind Method

function greet(){
    console.log(`Welcome ${this.fname} ${this.lname} .`) ;
}

let user = {
    fname:"Neon",
    lname:"Em",
}

let greets = greet.bind(user) ;

greets() ;