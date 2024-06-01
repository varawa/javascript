//Function vs Method

let age = function(birthYear){
    let age = 2024 - birthYear ;
    console.log(`Current age is = ${age} .`) ;
}

age(2005) ;

//Method : It's nothing but object property(key) holding function as "value" .

let person = {
    aged : function(birthYr){
        let age = 2024 - birthYr ;
        return age ;
    }
}
