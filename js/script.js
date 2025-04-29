// Cart Functions
function addToCart(product, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.name === product);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: product, price: price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product + " added to cart!");
    updateCartCount();
    loadCart(); // Optional: reload cart after adding
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.innerText = `(${count})`;
    }
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            cartItems.innerHTML += `
                <p>
                    ${item.name} - ₹${item.price} x ${item.quantity}
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </p>`;
            total += item.price * item.quantity;
        });
    }

    document.getElementById('cart-total').innerText = 'Total: ₹' + total;
}

function removeFromCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.name === product);
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1); // Remove item completely
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCart();
}

function checkoutCart() {
    alert('Checkout functionality coming soon!');
}

window.onload = function() {
    if (document.getElementById('cart-count')) updateCartCount();
    if (document.getElementById('cart-items')) loadCart();
};
