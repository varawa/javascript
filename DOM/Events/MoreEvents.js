//More evenets

//Copy event

let copyRightEl = document.querySelector('.copy') ;

copyRightEl.addEventListener('copy' , ()=>{
    console.log("CopyRight content .") ;
})

//Mouse Move Event

let box = document.querySelector('.box') ;

box.addEventListener('mousemove' , (e)=>{
    console.log(e.offsetX , e.offsetY) ;
})