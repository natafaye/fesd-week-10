
// state = data
const cartList = []


const cartContainer = document.querySelector("#cart-container")
const emptyCartText = document.querySelector("#empty-cart-text")

function addToCart(chairName) {
    // remove the empty cart text, if it's still there
    emptyCartText.remove()

    // Add it to the state (data) as well
    cartList.push(chairName)

    // make a new li
    const li = document.createElement("li") // <li></li>

    // put the chair name into the li
    li.textContent = chairName // <li>The Winston</li>

    // put some classes on the li
    li.className = "list-group-item"
    
    // move the li into the page
    cartContainer.appendChild(li) // <ul><li>The Winston</li></ul>
}