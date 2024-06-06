//Add Remove and Replace class of element .

let heading = document.querySelector('h1') ;

//Add class

heading.classList.add('newClass') ;
console.log(heading) ;

//Remove a class

heading.classList.remove("newClass") ;
console.log(heading) ;

//Replace a class 

heading.classList.add('newClass') ;
heading.classList.replace("newClass" , "newClass") ;
console.log(heading) ;
