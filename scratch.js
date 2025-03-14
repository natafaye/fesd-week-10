
const paragraphNode = document.getElementById("message")

// Event Listener/Handler
function handleUserChoice(userChoice) {
    // TODO: Pick computer's choice randomly
    // TODO: Figure out who won with the two choices
    paragraphNode.textContent = "You picked " + userChoice + ", the computer picked scissors. You won."
}