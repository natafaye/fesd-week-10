const list = document.getElementById("cart-container");
const emptyListItem = document.getElementById("empty-cart-text");

function addToCart(chair) {
    emptyListItem.remove();
    
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = chair;

    const button = document.createElement("button")
    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.textContent = "Delete";
    button.addEventListener("click", () => {
        li.remove();
    })
    li.appendChild(button);

    list.appendChild(li);
}

function checkOut() {
    
}