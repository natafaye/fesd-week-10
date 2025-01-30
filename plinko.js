
// Property vs variable?
// Are you using it across multiple methods/in code outside the class?
// if yes, it should be property, if not it can just be a variable

const players = [
    {
        name: "Bobby",
        lowScore: 3,
        score: 0
    },
    {
        name: "Sheila",
        lowScore: 2,
        score: 0
    }
]
const board = {}
let currentPlayer = undefined
const numberOfSlots = 4

const textbox = document.getElementById("name-input")
const slotButtons = document.getElementById("slot-buttons")

function start() {
    // get the name from the textbox
    const name = textbox.value

    currentPlayer = players.find(playerToCheck => playerToCheck.name === name)

    if (currentPlayer === undefined) {
        currentPlayer = { name: name, lowScore: 1000, score: 0 }
        players.push(currentPlayer)
    }

    renderMessage("Welcome " + currentPlayer.name + " Your lowest score so far is " + currentPlayer.lowScore)

    // show the buttons that ask the user where to drop the ball
    // slotButtons.style.display = "block"

    slotButtons.innerHTML = ""
    for(let i = 0; i < numberOfSlots; i++) {
        // make and append a button for each slot
        const button = document.createElement("button")
        button.textContent = "Slot " + (i + 1)
        button.addEventListener("click", () => dropTheBall(i + 1))
        slotButtons.appendChild(button)
    }
}

function dropTheBall(slot) {
    // add a point to the player's score
    currentPlayer.score++

    // drop the ball and figure out if they won
    // TODO: make this actually work
    const won = true
    // switch(slot) {
    //     case 1: 
    //     case 2:
    //     case 3:
    // }
    
    if(won) {
        // tell them they won and show them the low scores
        //messageDiv.innerHTML = `
        renderMessage(`
            <p>You won ${currentPlayer.name}!</p>
            <h4>Low Scores</h4>
            <table>
                ${players.map(player => `<tr><td>${player.name}</td><td>${player.lowScore}</td></tr>`).join("")}
            </table>
        `)

        // const table = document.createElement("table")
        // const row = document.createElement("tr")
        // table.appendChild(row)
        // const cell = document.createElement("cell")
        // cell.textContent = "Bobby"
        // row.appendChild(cell)
        // messageDiv.appendChild(table)
    } else {

    }
    // do you want to play again?
    // listen for their response and call start() if they say yes
}


const messageDiv = document.querySelector("#message")

function renderMessage(message) {
    // Fizzle into existence
    // Try to fade this out
    messageDiv.innerHTML = message
}