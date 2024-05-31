console.log("strings")

let firstname = "here" ;
let lastname = "not"
console.log(firstname , lastname) ;

//Strings are Case sensitive .

//String Concatenation

//METHOD 1 (+ OPERATOR)

//let fullname = firstname + " "  + lastname ;

//METHOD 2 (Using template literals)

let fullname = `I want to ${lastname} be ${firstname}` ;

console.log(fullname) 

//Getting characters from a string .
//0 based indexing .

//console.log(firstname[0]);
//console.log(firstname[1]);

//console.log(firstname.toLocaleLowerCase());
console.log(firstname.toLowerCase());
//console.log(firstname.toLocaleUpperCase());
console.log(firstname.toUpperCase());

//console.log(firstname.indexOf("h"));

let hobbies = "     coding reading running      "

let result = hobbies.trim() ;
console.log(result)
console.log(result.lastIndexOf("running")) ;

console.log(result.lastIndexOf("Running")) ;
console.log(result.includes("Running")) ;   //To check if something is included or not .

//SLICE METHOD

let names = "programming" ;

console.log(names.slice(0,3)) ;  //Excludes last index, i.e. 0 to 2 .

let favcolors = "bro.wn,bla.ck,gre.en,bl.ue" ;

let arrcolors1 = favcolors.split('.') ;
let arrcolors2 = favcolors.split(',') ;
console.log(arrcolors1) 
console.log(arrcolors2) 

//Strings in javascript are immutable .

let str = "1234" ;

str[0] = "p" ;      //No Change .


//Even when we concatenate two strings, the concatenated string takes a new memory location but never re-writes the older string .