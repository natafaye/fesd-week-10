// const paragraph = document.getElementById("special-paragraph")
// console.log(paragraph)

const myTextbox = document.querySelector("#textbox-thing")
console.log(myTextbox)

const paragraphContainer = document.getElementById("paragraph-container")

// paragraph.style.height = "3rem"
// paragraph.style.backgroundColor = "lightblue"
// paragraph.style.border = "3px solid green"

// value property on input DOM nodes

const messages = []

function onButtonClick() {
    // Also add it to the data
    messages.push(myTextbox.value)

    // Make a new little paragraph soul
    const paraSoul = document.createElement("p")

    // Set the text of the paragraph to the value of the textbox
    paraSoul.textContent = myTextbox.value

    // Listen to clicks on the paragraph
    paraSoul.addEventListener("click", () => {
        // Have it remove itself from the page
        paraSoul.remove()
    })

    // const paraSoul2 = paraSoul.cloneNode(true)

    // Move the paragraph from the Great Before to the page
    paragraphContainer.appendChild(paraSoul)
    // paragraphContainer.appendChild(paraSoul2)

    // Clear out the textbox
    myTextbox.value = ""
}

function clearAll() {
    // Option 1: Keep asking the node to disown it's youngest child
    // while (paragraphContainer.lastChild) {
    //     paragraphContainer.removeChild(paragraphContainer.lastChild)
    // }

    // Option 2: You don't have any children
    // paragraphContainer.innerHTML = ""

    // Option 3: Replace the children with nothing
    paragraphContainer.replaceChildren()
}