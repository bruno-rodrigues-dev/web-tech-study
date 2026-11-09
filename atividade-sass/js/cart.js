let cart = JSON.parse(localStorage.getItem('bookCart')) || [];

function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        const existing = cart.find(item => item.id === bookId);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...book, quantity: 1 });
        }
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    saveCart();
    updateCartUI();
}

function updateQuantity(bookId, delta) {
    const item = cart.find(i => i.id === bookId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(bookId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function saveCart() {
    localStorage.setItem('bookCart', JSON.stringify(cart));
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countEl.textContent = totalItems;
    }

    const cartItemsEl = document.getElementById('cart-items');
    if (cartItemsEl) {
        renderCartItems();
    }
}
