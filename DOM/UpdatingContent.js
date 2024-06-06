//Updating and changing content .

//Inner Text
//Retrieve and set content in plain text .

let cont = document.querySelector('.content') ;
cont.innerText = "here" ;
console.log(cont.innerText) ;

//It does not ignore spaces .

//innerHTML
//Retrieve and set content in HTML format .


cont.innerHTML += "<p>there</p>" ;

console.log(cont.innerHTML) ;
