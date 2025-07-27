document.addEventListener("DOMContentLoaded", async () => {
  const productsSection = document.getElementById("products-section");
  const productsGrid = document.getElementById("products-grid");
  const currentTitle = document.getElementById("current-category-title");
  const welcomeSection = document.querySelector(".welcome-section");
  const backButton = document.getElementById("back-to-home");
  const categoryLinks = document.querySelectorAll(".categories-list a");
  const categoryCards = document.querySelectorAll(".category-card");
  const cartCountEls = document.querySelectorAll(".cart-count");

  let cart = await fetchCart();

  function updateHeaderCount() {
    const total = Object.values(cart).reduce((sum, q) => sum + q, 0);
    cartCountEls.forEach(el => el.textContent = total);
  }

  function updateBadge(card, qty) {
    let badge = card.querySelector(".quantity-badge");
    const container = card.querySelector(".product-image-container");
    if (qty > 0) {
      if (!badge) {
        badge = document.createElement("div");
        badge.className = "quantity-badge";
        container.insertBefore(badge, container.firstChild);
      }
      badge.textContent = qty;
    } else if (badge) {
      badge.remove();
    }
  }

  async function fetchCart() {
    try {
      const res = await fetch("/cart/state");
      if (res.ok) return await res.json();
    } catch (e) {
      console.error("Greška pri dohvaćanju košarice:", e);
    }
    return {};
  }

  async function addToCart(productId, card) {
    const res = await fetch(`/cart/add/${productId}`, { method: "POST" });
    if (res.ok) {
      cart[productId] = (cart[productId] || 0) + 1;
      updateHeaderCount();
      updateBadge(card, cart[productId]);
    }
  }

  function createCard(product, categoryName) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image-container">
        <img src="/${product.image}" alt="${product.name}" class="product-image">
        <button class="add-to-cart" data-id="${product.id}">
          <img src="/images/shopping-cart-349544_1280.png" alt="Dodaj" class="cart-icon-adding">
        </button>
      </div>
      <div class="product-info">
        <h4>${product.name}</h4><p>${categoryName}</p>
      </div>
    `;

    const btn = card.querySelector(".add-to-cart");
    btn.addEventListener("click", e => {
      e.stopPropagation();
      addToCart(product.id, card);
    });

    updateBadge(card, cart[product.id] || 0);
    return card;
  }

  function showProducts(catId) {
    const cat = categoriesData[catId];
    if (!cat) return;
    productsGrid.innerHTML = "";
    cat.products.forEach(p => productsGrid.appendChild(createCard(p, cat.name)));
    currentTitle.textContent = cat.name;
    welcomeSection.style.display = "none";
    productsSection.style.display = "block";
  }

  function goHome() {
    welcomeSection.style.display = "block";
    productsSection.style.display = "none";
  }

  // Inicijalizacija
  updateHeaderCount();

  categoryLinks.forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      showProducts(a.dataset.category);
    });
  });

  categoryCards.forEach(c => {
    c.addEventListener("click", () => showProducts(c.dataset.category));
  });

  backButton.addEventListener("click", goHome);
});
