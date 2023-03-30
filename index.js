
//variables used in this game
let player = {
    name: "Swaminathan",
    hasAmt: 150
}

let cards=[]
let hasBlackJack= false
let isAlive= false
let sum= 0
let message
let newCards

//Grabbing the HTML CONTENTS
let comment = document.getElementById("comments")
let card = document.getElementById("card")
let sum1 = document.getElementById("sum")
let amt = document.getElementById("amt")
amt.textContent = player.name + ': Rs.' + player.hasAmt


function getRandomCard() {
    getCards=Math.floor(Math.random()*13)+1

    if (getCards === 1) {
        return 11
    }else if (getCards>10){
        return 10
    }else{
        return getCards
    }
}




function startGame() {

    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard, secondCard]
    sum= firstCard + secondCard
    renderGame()   
}



function renderGame(){
   
    sum1.textContent = "Sum: " + sum
    card.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        card.textContent += cards[i] +' ';
        
    }
    
    if(sum <= 20) {
        message = "Draw new card"
    } else if(sum === 21){
    message = "You hv won"
    hasBlackJack = true
    } else{
    message = "you are out the game"
    isAlive = false 
    }
    comment.textContent = message


}

function newCard(){


    if (hasBlackJack === false && isAlive ===true) {
      
        newCards = getRandomCard()
        sum += newCards
        cards.push(newCards)
        renderGame()
    }

}
