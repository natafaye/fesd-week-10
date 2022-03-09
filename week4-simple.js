
const cartContainer = document.getElementById("cart-container");
const emptyCartText = document.getElementById("empty-cart-text");

function addToCart(chair) {
    emptyCartText.remove();

    const listItem = document.createElement("li");
    listItem.textContent = chair;
    listItem.classList.add("list-group-item")

    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.classList.add("btn-sm");
    button.classList.add("float-end");
    button.textContent = "-";
    button.addEventListener("click", () => {
        listItem.remove();
    })
    listItem.appendChild(button);

    cartContainer.appendChild(listItem);
}