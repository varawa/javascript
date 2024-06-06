//Getting and setting attribute of element .

let link = document.querySelector('a') ;
console.log(link.getAttribute('href')) ;

//SetAttribute


link.setAttribute('href' , 'https://www.yahoo.com') ;
link.innerText = "yahoo" ;

console.log(link.getAttribute('href')) ;

