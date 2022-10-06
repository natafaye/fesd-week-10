
const cartContainer = document.getElementById("cart-container");
const emptyCartMessage = document.getElementById("empty-cart-text");

function addToCart(chair) {
    emptyCartMessage.remove();

    const li = document.createElement("li");
    li.classList.add("list-group-item")
    li.textContent = chair

    const button = document.createElement("button");
    button.classList.add("btn")
    button.classList.add("btn-danger")
    button.classList.add("ms-2")
    button.textContent = "Delete"
    button.addEventListener("click", () => {
        li.remove();
    })
    li.appendChild(button);

    cartContainer.appendChild(li);
}