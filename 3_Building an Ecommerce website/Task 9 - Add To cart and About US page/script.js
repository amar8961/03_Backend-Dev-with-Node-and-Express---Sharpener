if (document.readyState == 'loading') {
    // The Document.readyState property describes the loading state of the document. When the value of this property changes, a readystatechange event fires on the document object.
    // loading -> The document is still loading.
    document.addEventListener('DOMContentLoaded', ready)
    // The DOMContentLoaded event fires when the DOM content is loaded, without waiting for images and stylesheets to finish loading.
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-remove')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
        // The addEventListener() method attaches an event handler to an element.
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('prod-images')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-remove" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    // The append() method appends an element to the end of the list.
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    // The classList property returns the CSS classnames of an element.
    notification.innerHTML = `<h4>Your Product : <span>${title}</span> is added to the cart<h4>`;
    container.appendChild(notification);
    // The appendChild() method of the node interface, is used to create a text node as the last child of the node. This method is also used to move an element from one element to another element.
    setTimeout(()=>{
        notification.remove();
    },2500)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('₹', ''))
        // The parseFloat function converts its first argument to a string, parses that string as a decimal number literal, then returns a number or NaN .
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    // The Math.round() function returns the value of a number rounded to the nearest integer.
    document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + total
}