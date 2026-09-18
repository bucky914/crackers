// ===== Cart Utilities (shared across all pages) =====
// Cart is stored in localStorage as: { "<productId>": quantity, ... }

const CART_KEY = "crackers_cart_v1";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty) {
  qty = parseInt(qty) || 1;
  const cart = getCart();
  cart[productId] = (cart[productId] || 0) + qty;
  saveCart(cart);
}

function setCartQty(productId, qty) {
  qty = parseInt(qty) || 0;
  const cart = getCart();
  if (qty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = qty;
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart();
  delete cart[productId];
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function getCartCount() {
  const cart = getCart();
  return Object.values(cart).reduce((sum, q) => sum + q, 0);
}

function getCartDetails() {
  // Returns an array of { product, qty, lineTotal }
  const cart = getCart();
  const details = [];
  Object.keys(cart).forEach((id) => {
    const product = PRODUCTS.find((p) => p.id === parseInt(id));
    if (product) {
      const qty = cart[id];
      details.push({ product, qty, lineTotal: product.price * qty });
    }
  });
  return details;
}

function getCartTotal() {
  return getCartDetails().reduce((sum, item) => sum + item.lineTotal, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  if (badge) {
    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  }
}

// Run on every page load
document.addEventListener("DOMContentLoaded", updateCartBadge);
