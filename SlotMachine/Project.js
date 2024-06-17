//1. Deposit some money .
//2. Determine number of lines to bet on .
//3. Collect a bet amount .
//4. Spin the slot machine .
//5. Check if the user won .
//6. Give the user their winnings .
//7. Play Again .

/*function deposit(){
    return 1 ;
}

const x = deposit() ;*/
const prompt = require("prompt-sync")() ;

const ROWS = 3 ;
const COLS = 3 ;

const SYMBOLS_COUNT = {
    A: 2 ,
    B: 4 ,
    C: 6 ,
    D: 8
}

const SYMBOL_VALUES = {
    A: 5 ,
    B: 4 ,
    C: 3 ,
    D: 2 
}

const deposit = () =>{
    while(true){
        const depositAmount = prompt("Enter a deposit amount : ") ;
        const numberDepositAmount = parseFloat(depositAmount) ;
        
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount , Try Again !") ;
        } else{
            return numberDepositAmount ;
        }
    }
} ;

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3) : ") ;
        const numberOfLines = parseFloat(lines) ;

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines , Try Again !") ;
        } else{
            return numberOfLines ;
        }
    }
}

const getBet = (balance , lines) =>{
    while(true){
        const bet = prompt("Enter the bet per line : ") ;
        const numberBet = parseFloat(bet) ;

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)){
            console.log("Invalid number of lines , Try Again !") ;
        } else{
            return numberBet ;
        }
    }
}

const spin = () => {
    const symbols = [] ;
    //**Its marked const , i.e. we can't change reference to the array but still can change values inside it .**

    for(const[symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0 ; i < count ; i++){
            symbols.push(symbol) ;
        }
    }
    const reels = [[] , [] , []] ;
};

spin() ;

let balance = deposit() ;
const numberOfLines = getNumberOfLines() ;
const bet  = getBet(balance , numberOfLines) ;