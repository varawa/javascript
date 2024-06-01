//this keyword

//In each method we have an access of special keyword called "this" .

//"this" keyword represent the object. "Calling" the "method" in which "this" is "present" .

//EXAMPLE

let person = {
    firstName : "harry",
    lastName : "brook",
    city : "delhi",
    getSummary : function(){
        //return `${this.firstName}` ;
        return this ;
    }
}

console.log(person.getSummary()) ;