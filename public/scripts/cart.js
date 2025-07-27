document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('cart-items');
  const summary = document.getElementById('summary-count');
  const countEls = document.querySelectorAll('.cart-count');
  let cartItems = [];

  async function fetchCartItems() {
    try {
      const res = await fetch('/cart/getAll', {
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error("Greška pri dohvaćanju košarice");
      const data = await res.json();
      cartItems = data.items.map(i => ({
        id: i.product.id,
        name: i.product.name,
        image: i.product.image,
        quantity: i.quantity
      }));
      render();
    } catch (err) {
      container.innerHTML = `<p>Greška pri dohvaćanju podataka.</p>`;
      console.error(err);
    }
  }

  function render() {
    container.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => total += item.quantity);
    summary.textContent = total;
    countEls.forEach(el => el.textContent = total);

    if (cartItems.length === 0) {
      container.innerHTML = '<p>Košarica je prazna.</p>';
      return;
    }

    cartItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="/${item.image}" alt="${item.name}">
        <div><h3>${item.name}</h3></div>
        <div class="item-quantity">
          <button data-id="${item.id}" data-op="decrement">-</button>
          <span>${item.quantity}</span>
          <button data-id="${item.id}" data-op="increment">+</button>
        </div>
        <button class="remove-btn" data-id="${item.id}">Ukloni</button>
      `;
      container.appendChild(div);
    });
  }

  container.addEventListener('click', async e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const id = btn.dataset.id;
    const op = btn.dataset.op;

    if (btn.classList.contains('remove-btn')) {
      await fetch(`/cart/delete/${id}`, { method: 'POST' });
      cartItems = cartItems.filter(i => i.id !== id);
    } else {
      const idx = cartItems.findIndex(i => i.id === id);
      if (op === 'increment') {
        await fetch(`/cart/add/${id}`, { method: 'POST' });
        cartItems[idx].quantity++;
      } else if (op === 'decrement' && cartItems[idx].quantity > 1) {
        await fetch(`/cart/remove/${id}`, { method: 'POST' });
        cartItems[idx].quantity--;
      }
    }

    render();
  });

  fetchCartItems();
});
