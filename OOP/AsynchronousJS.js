//Asynchronous Javascript

//Async Code

console.log(1) ;
console.log(2) ;



setTimeout(()=>{
    console.log("Call back function after 3 seconds .") ;
    },3000)     //After 3 seconds .
    
//Blocks after this function will print before this setTimeout function .

console.log(3) ;
console.log(4) ;


//Making HTTP Request (Example)

//HTTP request status codes .

//Informational Responses (100 - 199)
//Successful Responses (200 - 299)
//Redirectional Responses (300 - 399)
//Client error responses (400 - 499)
//Server error responses (500 - 599)

let request = new XMLHttpRequest() ;

console.log(request) ;

request.addEventListener('readystatechange' , ()=>{
    if(request.readyState === 4 && request.status == 200){
        console.log(request , request.responseText) ;
    }
}) ;

//Set-up the request .

request.open("Get" , "https://jsonplaceholder.typicode.com/todos") ;

//Sending the request .

request.send() ;

//Value state description

//0. UNSENT client has been created . open() not called yet .
//1. OPENED open() has been called .
//2. HEADERS_RECIEVED send() has been called , and headers .
//3. Loading Downloading ; responseText holds partial data .
//4. DONE The operation is complete .