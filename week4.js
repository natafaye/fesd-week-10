/**** Templates and Containers ****/

const chairsContainer = document.getElementById("chairs-container")
const cartContainer = document.getElementById("cart-container");

const emptyCartTemplate = document.getElementById("empty-cart-template");
const cartItemTemplate = document.getElementById("cart-item-template"); 
const chairTemplate = document.getElementById("chair-template");

/**** Data ****/

const shoppingCart = [];

const CHAIRS = [
    {
        id: 0,
        title: "The Albert",
        description: "A sophisticated seat",
        image: "images/chair.jpg",
        price: "$499"
    },
    {
        id: 1,
        title: "The Sophia",
        description: "A friendly companion",
        image: "images/thesophia.jpg",
        price: "$899"
    },
    {
        id: 2,
        title: "The Winston",
        description: "Reliably reliable",
        image: "images/thewinston.jpg",
        price: "$299"
    },
    {
        id: 3,
        title: "The Joey",
        description: "Simply marvelous",
        image: "images/therebecca.jpg",
        price: "$350"
    }
]

window.addEventListener("load", () => {
    renderChairList();
    renderShoppingCart();
})

/**** Render Chairs ****/

function renderChairList() {
    emptyElement(chairsContainer);
    for(const chair of CHAIRS) {
        const chairCard = renderChairCard(chair);
        chairsContainer.appendChild(chairCard);
    }
}

function renderChairCard(chair) {
    const chairElement = chairTemplate.cloneNode(true);
    chairElement.querySelector("#chair-image").src = chair.image;
    chairElement.querySelector("#chair-title").textContent = chair.title;
    chairElement.querySelector("#chair-description").textContent = chair.description;
    chairElement.querySelector("#chair-buy-button").addEventListener("click", () => addToCart(chair));
    return chairElement;
}

/**** Render Cart ****/

function renderShoppingCart() {
    emptyElement(cartContainer);
    for(const item of shoppingCart) {
        const shoppingListItem = renderShoppingListItem(item);
        cartContainer.appendChild(shoppingListItem);
    }
    if(shoppingCart.length === 0) {
        cartContainer.appendChild(emptyCartTemplate.cloneNode(true));
    }
}

function renderShoppingListItem(item) {
    const cartItem = cartItemTemplate.cloneNode(true);
    cartItem.querySelector("#item-number").textContent = item.number;
    cartItem.querySelector("#item-text").textContent = item.text;
    cartItem.querySelector("#remove-button").addEventListener("click", () => removeFromCart(item.id));
    return cartItem;
}

/**** Event Handlers ****/

function addToCart(chair) {
    let item = shoppingCart.find(i => i.id === chair.id);
    if(!item) {
        item = {
            id: chair.id,
            text: chair.title,
            number: 0
        }
        shoppingCart.push(item);
    }
    item.number++;
    renderShoppingCart();
}

function removeFromCart(chairId) {
    const item = shoppingCart.find(i => i.id === chairId);
    item.number--;
    if(item.number === 0) {
        shoppingCart.splice(shoppingCart.indexOf(item), 1);
    }
    renderShoppingCart();
}

/**** Utility *****/ 

function emptyElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}