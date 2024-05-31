//Passing Values

let invite = function(name = "DefaultValue" , time = "at night"){
    console.log("Welcome ", name , "You're Invited at ", time) ;
}

invite("j","morning");
invite("k");
let ageCalc = function(birthYear){
    let age = 2024 - birthYear ;
    return age ;
    //console.log("You're currently ", age , "years old .") ;
}

console.log("You're currently ",ageCalc(1999)) ;


