document.addEventListener('DOMContentLoaded', () => {
    initCatalog();
    initCart();
    initSearch();
    updateCartUI();
});

function initCatalog() {
    const grid = document.getElementById('book-grid');
    if (!grid) return;

    renderBooks(books);

    const filters = document.querySelectorAll('.btn-filtro');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.textContent.trim();
            if (category === 'Todos') {
                renderBooks(books);
            } else {
                const filtered = books.filter(b => b.category === category);
                renderBooks(filtered);
            }
        });
    });
}

function renderBooks(booksToRender) {
    const grid = document.getElementById('book-grid');
    if (!grid) return;

    grid.innerHTML = '';
    booksToRender.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card-produtos book-card';
        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <p class="price">R$ ${book.price.toFixed(2).replace('.', ',')}</p>
                <button class="btn-add-cart" onclick="openBookModal(${book.id})">Ver Detalhes</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initSearch() {
    const searchInput = document.getElementById('book-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = books.filter(b =>
            b.title.toLowerCase().includes(term) ||
            b.author.toLowerCase().includes(term)
        );
        renderBooks(filtered);
    });
}

function initCart() {
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    if (!cartBtn || !cartModal) return;

    cartBtn.addEventListener('click', () => {
        cartModal.classList.add('open');
    });

    document.getElementById('close-cart').addEventListener('click', () => {
        cartModal.classList.remove('open');
    });
}

function openBookModal(id) {
    const book = books.find(b => b.id === id);
    const modal = document.getElementById('book-modal');
    if (!book || !modal) return;

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeBookModal()">&times;</span>
            <div class="modal-body">
                <img src="${book.image}" alt="${book.title}">
                <div class="modal-text">
                    <h2>${book.title}</h2>
                    <p class="author">${book.author}</p>
                    <p class="category">${book.category}</p>
                    <p class="description">${book.description}</p>
                    <p class="price">R$ ${book.price.toFixed(2).replace('.', ',')}</p>
                    <button class="btn-buy" onclick="handleAddToCart(${book.id})">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('open');
}

function closeBookModal() {
    document.getElementById('book-modal').classList.remove('open');
}

function handleAddToCart(id) {
    addToCart(id);
    closeBookModal();
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart">Seu carrinho está vazio.</p>';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p>R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                <div class="cart-qty">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="btn-remove" onclick="removeFromCart(${item.id})">&times;</button>
        </div>
    `).join('');

    const totalEl = document.getElementById('cart-total');
    if (totalEl) {
        totalEl.textContent = `Total: R$ ${calculateTotal().toFixed(2).replace('.', ',')}`;
    }
}
