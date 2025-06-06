
// Data
let numFoxes = 3

// Find the span
const foxSpan = document.getElementById("fox-span")
const addInput = document.querySelector("#add-input")
const resourcesContainer = document.getElementById("resources-container")

// foxSpan.className = "text-primary fw-bold"
// foxSpan.style.border = "2px solid black"

// For inputs, selects, and things like that we use "value" instead of "textContent" or "innerHTML"
//addInput.value = "I'm the value!"

function incrementFoxes() {
    numFoxes++
    foxSpan.innerHTML = numFoxes // foxSpan.textContent = 4
}

function decrementFoxes() {
    numFoxes--
    foxSpan.innerHTML = numFoxes
}

function addResource() {
    // Get what's in the add input
    const newResourceName = addInput.value
    const newH4 = document.createElement("h4") // a new little h4 soul in The Great Before
    newH4.innerHTML = newResourceName
    resourcesContainer.appendChild(newH4) // move it to earth (give it an earth pass)

    // Listen to an event (like clicking) on a dynamically created element
    newH4.addEventListener("click", () => {
        // For no good reason, we want to delete the h4
        newH4.remove()
    })

    // Clear out the input
    addInput.value = ""
}

function clearResources() {
    //resourcesContainer.innerHTML = ""
    resourcesContainer.replaceChildren()
}

// GREAT BEFORE
// 