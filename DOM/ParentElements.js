//Parent , children and sibling elements .

let parentEl = document.querySelector('.content') ;

//Parent Element
console.log(parentEl) ;

///All children of parent .
console.log(parentEl.children) ;

//We cannot run forEach method on HTMLCollection so,
//First convert it into array .

let newArray = Array.from(parentEl.children) ;

Array.from(parentEl.children).forEach(function(element){
    console.log(element) ;
}) ;

newArray.forEach(function(element){
    element.classList.add("coders") ;
}) ;

//Child Element

let childEl = document.querySelector('h2') ;

//Find the parent of specific child .
console.log(childEl.parentElement) ;

//Find next sibling of child .
console.log(childEl.nextElementSibling) ;

console.log(childEl.previousElementSibling) ;