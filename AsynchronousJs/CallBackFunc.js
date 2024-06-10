//CallBack Function

let todos = (callback)=>{

    let request = new XMLHttpRequest() ;

    request.addEventListener('readystatechange' , ()=>{
        if(request.readyState === 4 && request.status == 200){
            //console.log(request , request.responseText) ;
            callback(undefined , request.responseText) ;
        }else if(request.readyState === 4){
            //console.log("Data could not be fetched .") ;
            callback("Data could not be fetched" , undefined) ;
        }
    }) ;
    
    //Set-up the request .
    
    request.open("Get" , "https://jsonplaceholder.typicode.com/todos") ;
    
    //Sending the request .
    
    request.send() ;
}

//Async code examples .

todos((error , data)=>{
    if(error){
        console.log(error) ;
    }else{
        console.log(data) ;
    }
}) ;

console.log(3) ;
console.log(4) ;
