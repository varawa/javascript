//CallBack Function

/*let todos = (callback)=>{

    let request = new XMLHttpRequest() ;

    request.addEventListener('readystatechange' , ()=>{
        if(request.readyState === 4 && request.status == 200){
            //console.log(request , request.responseText) ;
            let data = JSON.parse(request.responseText) ;
            callback(undefined , data) ;
        }else if(request.readyState === 4){
            //console.log("Data could not be fetched .") ;
            callback("Data could not be fetched" , undefined) ;
        }
    }) ;
    
    //Set-up the request .
    
    request.open("Get" , "https://jsonplaceholder.typicode.com/todos") ;
    
    //Sending the request .
    
    request.send() ;
}*/

//Async code examples .

/*todos((error , data)=>{
    if(error){
        console.log(error) ;
    }else{
        console.log(data) ;
    }
}) ;*/

console.log(3) ;
console.log(4) ;

//Chain of todo function callback

//Callback hell.

/*todos("data.json" , (error,data)=>{
    if(error){
        console.log(error) ;
        }else{
            console.log(data) ;
        }
        todos("mario.json" , (error,data)=>{
            if(error){
                console.log(error) ;
            }else{
                console.log(data) ;
            }
            todos("lurie.json" , (error,data)=>{
                if(error){
                    console.log(error) ;
                }else{
                    console.log(data) ;
                }
            })
        })
})*/

//Promise

let getSomething = ()=>{
    return new Promise(resolve , reject=>{
        resolve("Some data .") ;
        //reject("Some error .") ;
    })
}

getSomething().then((data)=>{
    console.log(data) ;
}).catch((error)=>{
    console.log(error) ;
})

let todos = (resource , callback)=>{
    return new Promise ;
}
