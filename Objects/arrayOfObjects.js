//Objects inside array .

let blockList = [{user : "john" , reason : "abusive content"} , {user : "jaheily" , reason : "spam"}] ;

console.log(blockList) ;

for(let i = 0 ; i < blockList.length ; i++){
    console.log(blockList[i].user) ;
}

