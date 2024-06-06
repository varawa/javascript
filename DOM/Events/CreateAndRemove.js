//Create and remove the element .

//Creating

let ul = document.querySelector('ul') ;
let button = document.querySelector('.clickMe') ;

console.log(ul)

button.addEventListener('click' , ()=>{
    let li = document.createElement('li') ;
    li.textContent = "new" ;
    ul.append(li) ;                             //Prepand and Uppend
})

console.log(ul) ;

//Removing

let elements = document.querySelectorAll('li') ;

elements.forEach(function(element){
    element.addEventListener('click' , e =>{
        e.target.remove() ;
    })
})
