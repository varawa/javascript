//Local Storage

//In previous to-do list task when we refresh the browser we lose our current state data .


//Store and retrieve data from database .

//Store and retrieve data from local storage .

//For now we focus on local storage .

console.log(window) ;

//Get Item

//Set Item

//Update Item

//Set the item in local storage .

//localStorage.setItem('key' , 'value') ;

localStorage.setItem('its' , "programming") ;
localStorage.setItem('age' , "5") ;

console.log(localStorage) ;

localStorage.setItem('age' , 26) ;  //Overwrite the previous value .
console.log(localStorage) ;

console.log(localStorage.getItem('its')) ;

//Remove items 

localStorage.removeItem("age") ;
console.log(localStorage) ;

//Clear

//localStorage.clear() ;