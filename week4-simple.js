
const cartContainer = document.getElementById("cart-container");
const emptyCartMessage = document.getElementById("empty-cart-text");
const shoppingCart = [];

function addToCart(chair) {
    // Adds to the data
    shoppingCart.push(chair);

    const cartItem = document.createElement("li");
    cartItem.classList.add("list-group-item");
    cartItem.textContent = chair;
    cartContainer.appendChild(cartItem)

    // Create and set up button
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.classList.add("btn-sm");
    button.classList.add("float-end");
    button.textContent = "-";

    // Make the button work
    button.addEventListener("click", () => {
        cartItem.remove();

        // Removes from the data
        // Will not work perfectly
        const index = shoppingCart.indexOf(chair);
        shoppingCart.splice(index, 1);

        // we could add more logic here to bring the emptyCartMessage back
    })

    // Add the button to the list item
    cartItem.appendChild(button);

    // Make sure empty cart message is not in the page
    emptyCartMessage.remove();
}

function checkOut() {
    
}

// GREAT BEFORE

