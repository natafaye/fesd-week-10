// let number = 3
// let answer = prompt("What number do you guess?")
// if(Number(answer) === number) {
//     alert("You guessed right!")
// } else {
//     alert("You guessed wrong!")
// }
// alert("Goodbye!")


const messageP = document.getElementById("message")
const textbox = document.getElementById("number-input")

// Event Listener or Event Handler
function handleGuessClick() {
    // Figure out what's in the textbox right now
    if(textbox.value === "3") {
        messageP.textContent = "You guessed right!"
    } else {
        messageP.textContent = "You guessed wrong!"
    }
}


const myButton = document.getElementById("my-button")

// WORKING: A function is passed in, instead of immediately calling the function
// and passing in the returned value
myButton.addEventListener("click", () => alert("Clicked!") )

// BROKEN: Will alert when the page loads in, instead of when the button is clicked
// immediately calls the function and gives addEventListener what alert returns
// myButton.addEventListener("click", alert("Clicked!"))


// someFunction(3 + 5) // someFunction will get 8 not 3 + 5

// someFunction(prompt("What's your name?")) // someFunction will get whatever prompt returns