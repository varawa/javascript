//Event Basics (click Event)

let eventEl = document.querySelector('.clickMe') ;

console.log(eventEl) ;

eventEl.addEventListener('click',function(){
    console.log("clicked") ;
})

let elements = document.querySelectorAll('li') ;
console.log(elements) ;

elements.forEach(function(element){
    element.addEventListener('click' , function(e){
        console.log(e.target) ;
    })
})