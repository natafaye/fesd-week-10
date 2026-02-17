
// Data
let cheesePoints = 0


// Finding
const textbox = document.getElementById("textbox")
const cheesePointsSpan = document.getElementById("cheese-points-display")
const corralDiv = document.querySelector("#corral")


function startGame() {
    // Reset cheese points
    cheesePoints = 0
    cheesePointsSpan.textContent = cheesePoints

    // Clear out any old cows
    corralDiv.innerHTML = ""

    // Make a cow every half a second
    const cowMakingInterval = setInterval(() => {
        makeACow()
    }, 500)

    // After 10 seconds, end the game
    setTimeout(() => {
        // Stop making cows every half second
        clearInterval(cowMakingInterval)
        // Tell you your score!
        alert("Your score is: " + cheesePoints)
    }, 10000)
}


// <div id="cow" class="super-big-text" onclick="onCowClick()">🐄</div>

// Scope: variables are trapped inside the curly brackets they are created inside

function makeACow() {
    // Step 1: Make a new element soul with document.createElement()
    const cowDiv = document.createElement("div")
    cowDiv.textContent = "🐄"
    cowDiv.style.left = Math.floor(Math.random() * 30) + "rem"
    cowDiv.style.top = Math.floor(Math.random() * 30) + "rem"
    cowDiv.className = "cow"
    // Hook up the event listener so that when you click on the cow
    // it call onCowClick()
    cowDiv.addEventListener("click", () => {
        cowDiv.textContent = "🧀"
        // Update cheese points
        cheesePoints++
        cheesePointsSpan.textContent = cheesePoints
        // Wait 2 seconds then call this function that removes the cow div
        setTimeout(() => {
            cowDiv.remove()
        }, 2000)
    })
    // Step 2: Move it into the page with PARENT.appendChild(CHILD)
    corralDiv.appendChild(cowDiv)
}


// Listening
function onButtonClick() {
    // Updating
    // cowDiv.style.border = "1px solid white"
    // cowDiv.style.fontSize = "2rem"
    // cowDiv.className = "bg-primary p-5"
    // cowDiv.textContent += "Moo!"
    // textbox.style.backgroundColor = "pink"
}