//Digital Clock

let hourHand = document.querySelector('.hour') ;
let minuteHand = document.querySelector('.minute') ;
let secondHand = document.querySelector('.second') ;

let ticking = function(){
    let currentDate = new Date() ;

    let getHr = currentDate.getHours() ;
    let getMin = currentDate.getMinutes() ;
    let getSec = currentDate.getSeconds() ;

    hourHand.textContent = getHr ;
    minuteHand.textContent = getMin ;
    secondHand.textContent = getSec ;
}

setInterval(ticking , 1000) ;