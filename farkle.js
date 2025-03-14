const diceContainer = document.querySelector("#dice-container")
const meldArea = document.getElementById("meld-area")

let availableDice = 6

function rollDice() {
    // clear out any dice in the dice container
    diceContainer.innerHTML = ""

    for (let i = 0; i < availableDice; i++) {
        // get a random dice rolls
        const randomRoll = Math.floor(Math.random() * 6) + 1 // I think

        // put a little div in the page with that roll in it
        const dieDiv = document.createElement("div") // this makes a new little div soul
        dieDiv.textContent = randomRoll
        dieDiv.className = "border border-black rounded p-3 flex align-items-center"
        dieDiv.style.width = "4rem"
        dieDiv.style.height = "4rem"
        dieDiv.addEventListener("click", () => {
            meldArea.appendChild(dieDiv)
            // dieDiv.removeEventListener("click") // TODO: Fix this later
            availableDice--
            if(availableDice === 0) {
                // if you were lucky and melded all six, you get six more to roll
                availableDice = 6
            }
        })

        diceContainer.appendChild(dieDiv)
    }
}
// When the game first loads in roll all the dice
rollDice()

// GREAT BEFORE
// <div>3</div>