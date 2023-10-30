const playEl = document.getElementById('button')
const diceEl = document.getElementById("dice-image")
const listedEl = document.getElementById("list")
const showHistoryEl = document.getElementById("show-history")

const gameHistory = []
playEl.addEventListener('click', () => {
    diceEl.classList.add("dice-animation")
    setTimeout(() => {
        diceEl.classList.remove("dice-animation")}, 1000)

        playRound()
})


showHistoryEl.addEventListener("click", () =>{
    listedEl.classList.toggle("hide-history")
    
   
    }
)


function playRound() {
    let round = Math.ceil(Math.random() * 6)
    
    diceEl.innerHTML = confirmFace(round)
    
    gameHistory.push(round)
    updateGameHistory()
}

function confirmFace(round) {
    switch (round) {
        case 1:
            return " &#9856;"
        case 2:
            return "&#9857;"
        case 3:
            return "&#9858;"
        case 4:
            return "&#9859;"
        case 5:
            return "&#9860;"
        case 6:
            return "&#9861;"

            
    
        default:
            return ""
    }
}

function updateGameHistory(){
    listedEl.innerHTML = "";

    for (let i = 0; i < gameHistory.length; i++){

        const rollEl = document.createElement("li")
        rollEl.innerHTML = `Roll ${i + 1}: <span> ${confirmFace(gameHistory[i])} </span>`
        console.log(rollEl.innerHTML);
        listedEl.appendChild(rollEl)
    }
}