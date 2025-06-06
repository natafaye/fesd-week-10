const addTextbox = document.getElementById("add-input")
const taskList = document.getElementById("task-list")

function addTask() {
    console.log( addTextbox.value )

    const newBabyLi = document.createElement("li") // <li></li>
    newBabyLi.innerHTML = addTextbox.value

    // We kina have to use .addEventListener()
    newBabyLi.addEventListener("click", () => {
        // remove this li
        newBabyLi.remove()
    })

    taskList.appendChild(newBabyLi) // move it into the page
}


// <li onclick="newBabyLi.remove()"></li>
// <li onclick="newBabyLi.remove()"></li>
// <li onclick="newBabyLi.remove()"></li>