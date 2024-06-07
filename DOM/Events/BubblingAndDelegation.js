//Bubblin and Delegation .

/*let ul = document.querySelector('ul') ;

console.log(ul)

ul.addEventListener("click" , ()=>{
    console.log("Inside ul") ;
})
    
    let li = document.querySelectorAll('li') ;

    li.forEach(function(element){
        element.addEventListener("click" , ()=>{
            console.log("Inside li") ;
        })
})
            
let button = document.querySelector('.clickMe') ;
button.addEventListener('click' , ()=>{
    let li = document.createElement('li') ;
    li.textContent = "new" ;
    ul.append(li) ;                            
})

console.log(ul) ;*/

let ul = document.querySelector('ul') ;

ul.addEventListener("click" , (e)=>{
    if(e.target.nodeName == 'LI'){
        e.target.remove() ;
    }
})