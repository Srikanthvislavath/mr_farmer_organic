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
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').innerText = `(${count})`;
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - ₹${item.price} x ${item.quantity}</p>`;
        total += item.price * item.quantity;
    });
    document.getElementById('cart-total').innerText = 'Total: ₹' + total;
}

function checkoutCart() {
    alert('Checkout functionality coming soon!');
}

window.onload = function() {
    if (document.getElementById('cart-count')) updateCartCount();
    if (document.getElementById('cart-items')) loadCart();
};
